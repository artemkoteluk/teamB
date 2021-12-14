import { Injectable, Injector, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, PortalHost } from '@angular/cdk/portal';

import { SidebarOverlayRef } from './sidebar-overlay-ref';
import { RightSidebarComponent } from './right-sidebar.component';

interface SidebarConfig {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: SidebarConfig = {
  hasBackdrop: true,
  backdropClass: 'sidebar-backdrop',
  panelClass: 'sidebar-panel',
};

@Injectable()
export class SidebarService {
  constructor(
    private injector: Injector,
    private overlay: Overlay,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  open() {
    // Override default configuration
    const sidebarConfig = DEFAULT_CONFIG;

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(sidebarConfig);

    // Instantiate remote control
    const sidebarRef = new SidebarOverlayRef(overlayRef);

    const overlayComponent = this.attachSidebarContainer(
      RightSidebarComponent,
      overlayRef,
      sidebarConfig,
      sidebarRef
    );

    // Pass the instance of the overlay component to the remote control
    sidebarRef.componentInstance = overlayComponent;

    overlayRef.backdropClick().subscribe(() => sidebarRef.close());

    return overlayRef;
  }

  private createOverlay(config: SidebarConfig) {
    // const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(config);
  }

  private attachSidebarContainer(
    component,
    overlayRef: OverlayRef,
    config: SidebarConfig,
    sidebarRef: SidebarOverlayRef
  ) {
    const injector = this.createInjector(config, sidebarRef);

    const containerPortal = new ComponentPortal(component, null, injector);
    const containerRef: ComponentRef<any> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private createInjector(config: SidebarConfig, sidebarRef: SidebarOverlayRef): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(SidebarOverlayRef, sidebarRef);

    return new PortalInjector(this.injector, injectionTokens);
  }

  private getOverlayConfig(config: SidebarConfig): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      positionStrategy,
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
    });

    return overlayConfig;
  }
}
