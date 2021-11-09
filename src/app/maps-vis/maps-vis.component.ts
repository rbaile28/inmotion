import { Component, OnInit } from '@angular/core';
import teams from './mlb_stadium.json';

@Component({
  selector: 'app-maps-vis',
  templateUrl: './maps-vis.component.html',
  styleUrls: ['./maps-vis.component.scss']
})
export class MapsVisComponent implements OnInit {
  teams = teams;

  ngOnInit(): void {
    
  }
  // google maps zoom level
  zoom: number = 15;
    
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

  /*mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }*/

}