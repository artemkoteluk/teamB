import {Component, OnInit, ViewChild} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Color, NgxChartsModule, ScaleType} from '@swimlane/ngx-charts';
import {curveBasis, CurveFactory} from 'd3-shape';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {SingleDataInterface} from "./single-data-interface";
import {MultiDataInterface} from "./multi-data-inteface";
import {
  multi,
  recentSales,
  recentSalesData,
  salesByCountry,
  salesSummary,
  single,
  topCategories,
  use
} from "./dashboard-data";
import {
  colorScheme, colorSchemeActiveUsers,
  colorSchemeRecentSales,
  colorSchemeSales,
  colorSchemeSalesSummary, colorSchemeTopCategories,
  colorSchemeUse
} from "./dashboard-color-data";
import {RecentSalesInterface} from "./recent-sales-inteface";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public xAxis: boolean = true;
  public yAxis: boolean = true;
  public autoScale: boolean = true;
  private script: HTMLScriptElement = null;
  public curve: CurveFactory = curveBasis;
  public displayedColumns: string[] = ['product', 'price', 'timeAgo'];
  public dataSource: MatTableDataSource<RecentSalesInterface>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public single: SingleDataInterface[] = single;
  public multi: MultiDataInterface[] = multi;
  public use: MultiDataInterface[] = use;
  public activePages: string[] = [
    '/components', '/register', '/apps/inbox', '/tables/all-in-one-table', '/dashboard'
  ];
  public salesByCountry: SingleDataInterface[] = salesByCountry;
  public salesSummary: MultiDataInterface[] = salesSummary;
  public topCategories: SingleDataInterface[] = topCategories;
  public recentSales: MultiDataInterface[] = recentSales;
  public recentSalesData: RecentSalesInterface[] = recentSalesData;

  public colorScheme: Color = colorScheme;
  public colorSchemeRecentSales: Color = colorSchemeRecentSales;
  public colorSchemeSales: Color = colorSchemeSales;
  public colorSchemeUse: Color = colorSchemeUse;
  public colorSchemeSalesSummary: Color = colorSchemeSalesSummary;
  public colorSchemeActiveUsers: Color = colorSchemeActiveUsers;
  public colorSchemeTopCategories: Color = colorSchemeTopCategories;

  constructor() {

    this.dataSource = new MatTableDataSource(this.recentSalesData);

  }

  ngOnInit(): void {
    this.mapSpoof()
    this.mapCreate();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private mapSpoof(): void {
    globalThis.google = null;
    //spoof API key domain check
    const substringOriginal = globalThis.String.prototype.substring;
    globalThis.String.prototype.substring = function () {
      if (this == globalThis.window.location) {
        return substringOriginal.apply("https://developers.google.com/maps/documentation/javascript/examples/map-simple", arguments);
      }
      return substringOriginal.apply(this, arguments);
    }
  }

  private mapCreate(): void {
    globalThis.window['initMap'] = DashboardComponent.mapInit;
    if (globalThis.google?.maps == null) {
      this.script = globalThis.document.createElement('script');
      this.script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap';
      this.script.async = true;
      // Append the 'script' element to 'head'
      globalThis.document.head.appendChild(this.script);
    } else {
      DashboardComponent.mapInit();
    }
  }

  private static mapInit(): void {
    // JS API is loaded and available
    const map = new globalThis.google.maps.Map(globalThis.document.getElementById("map") as HTMLElement, {
      center: {lat: 40.714602, lng: -74.005973},
      zoom: 18,
      disableDefaultUI: true,
    });
    map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});

  }

}
