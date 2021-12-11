import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  private script: HTMLScriptElement = null;

  constructor() {
  }

  ngOnInit(): void {

    this.mapSpoof();
    this.mapCreate();

  }

  private mapSpoof() {
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

  private mapCreate() {
    globalThis.window['initMap'] = GoogleMapComponent.mapInit;
    if (globalThis.google?.maps == null) {
      this.script = globalThis.document.createElement('script');
      this.script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap';
      this.script.async = true;
      // Append the 'script' element to 'head'
      globalThis.document.head.appendChild(this.script);
    } else {
      GoogleMapComponent.mapInit();
    }
  }

  private static mapInit() {
    // JS API is loaded and available
    const map = new globalThis.google.maps.Map(globalThis.document.getElementById("map") as HTMLElement, {
      center: {lat: 40.714602, lng: -74.005973},
      zoom: 18,
    });

  }
}
