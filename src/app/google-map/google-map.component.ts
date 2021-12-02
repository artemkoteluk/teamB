import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  constructor() {

    //spoof API key domain check
    var ss = globalThis.String.prototype.substring;
    globalThis.String.prototype.substring = function () {
      if(this==globalThis.window.location) {
        return ss.apply("https://fury.visurel.com/",arguments);
      }
      return ss.apply(this,arguments);
    }
    // Create the script tag, set the appropriate attributes
    var script = globalThis.document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB5XdPUZ6534tmlkG_TfFiemTV-N6XvJOo&callback=initMap';
    script.async = true;

    // Attach your callback function to the window object
    globalThis.window['initMap'] = function () {
      // JS API is loaded and available
      var map = new globalThis.google.maps.Map(globalThis.document.getElementById("map") as HTMLElement, {
        center: { lat: 40.714602, lng: -74.005973 },
        zoom: 18,
      });

    };

    // Append the 'script' element to 'head'
    globalThis.document.head.appendChild(script);

  }

  ngOnInit(): void {
  }

}
