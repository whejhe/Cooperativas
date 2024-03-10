import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { provincias } from 'src/app/models/Provincias';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map?: L.Map;
  markersLayer = L.layerGroup();

  constructor() {}
  ngOnInit(): void {}

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([39.868, -3.45], 6);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    if (this.map) {
      for (const provincia of provincias) {
        const newMarker = L.marker(provincia.coordinates, {
          title: provincia.name,
          opacity: provincia.opacity,
          icon: provincia.iconUrl,
        });
        newMarker.addTo(this.map);
      }
    }
  }
}
