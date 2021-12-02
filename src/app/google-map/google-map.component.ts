import {Component, OnInit} from '@angular/core';
import {global} from "@angular/compiler/src/util";

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  script = null;

  constructor() {



  }

  ngOnInit(): void {
    globalThis.google=null;
    //spoof API key domain check
    var ss = globalThis.String.prototype.substring;
    globalThis.String.prototype.substring = function () {
      if (this == globalThis.window.location) {
        return ss.apply("https://fury.visurel.com/", arguments);
      }
      return ss.apply(this, arguments);
    }
    // Create the script tag, set the appropriate attributes


    // Attach your callback function to the window object
    function init() {
      // JS API is loaded and available
      var map = new globalThis.google.maps.Map(globalThis.document.getElementById("map") as HTMLElement, {
        center: {lat: 40.714602, lng: -74.005973},
        zoom: 18,
      });

    }

    globalThis.window['initMap'] = init;
    if (globalThis.google?.maps == null) {
      this.script = globalThis.document.createElement('script');
      this.script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB5XdPUZ6534tmlkG_TfFiemTV-N6XvJOo&callback=initMap';
      this.script.async = true;
      // Append the 'script' element to 'head'
      globalThis.document.head.appendChild(this.script);
    } else {
      init();
    }
  }

}
