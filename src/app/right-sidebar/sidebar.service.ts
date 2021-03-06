import {Injectable, Injector, ComponentRef, ComponentFactoryResolver} from '@angular/core';
import {Overlay, OverlayConfig, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';

import {SidebarOverlayRef} from '../notifications-sidebar/sidebar-overlay-ref';
import {SettingsSidebarComponent} from "../settings-sidebar/settings-sidebar.component";
import {NotificationsSidebarComponent} from "../notifications-sidebar/notifications-sidebar.component";
import {SidebarInterface} from "./sidebar-interface";


const DEFAULT_CONFIG: SidebarInterface = {
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
  ) {
  }

  public open(sidebarMode: boolean): OverlayRef {
    // Override default configuration
    const sidebarConfig = DEFAULT_CONFIG;

    // Returns an OverlayRef which is a PortalHost
    const overlayRef = this.createOverlay(sidebarConfig);

    // Instantiate remote control
    const sidebarRef = new SidebarOverlayRef(overlayRef);

    let overlayComponent: any;
    if (sidebarMode) {
      overlayComponent = this.attachSidebarContainer(
        NotificationsSidebarComponent,
        overlayRef,
        sidebarConfig,
        sidebarRef
      );
    } else {
      overlayComponent = this.attachSidebarContainer(
        SettingsSidebarComponent,
        overlayRef,
        sidebarConfig,
        sidebarRef
      );
    }


    // Pass the instance of the overlay component to the remote control
    sidebarRef.componentInstance = overlayComponent;

    overlayRef.backdropClick().subscribe(() => sidebarRef.close());

    return overlayRef;
  }

  private createOverlay(config: SidebarInterface): OverlayRef {
    // const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(config);
  }

  private attachSidebarContainer(component, overlayRef: OverlayRef, config: SidebarInterface, sidebarRef: SidebarOverlayRef): ComponentRef<any> {
    const injector = this.createInjector(config, sidebarRef);

    const containerPortal = new ComponentPortal(component, null, injector);
    const containerRef: ComponentRef<any> = overlayRef.attach(containerPortal);

    return containerRef.instance;
  }

  private createInjector(config: SidebarInterface, sidebarRef: SidebarOverlayRef): PortalInjector {
    const injectionTokens = new WeakMap();

    injectionTokens.set(SidebarOverlayRef, sidebarRef);

    return new PortalInjector(this.injector, injectionTokens);
  }

  private getOverlayConfig(config: SidebarInterface): OverlayConfig {
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
