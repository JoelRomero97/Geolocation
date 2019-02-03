import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DistributorInterface, MarkerInterface} from '../../util/data.interface';
import { LatLngBounds} from '@agm/core/services/google-maps-types';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  cp: string;
  latitude: number;
  longitude: number;
  markers: Array<MarkerInterface> = [];
  distributors: Array<DistributorInterface> = [];
  bounds: LatLngBounds = new google.maps.LatLngBounds();

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    distributors: Array<DistributorInterface>,
    markers: Array<MarkerInterface>,
    latitude: number,
    longitude: number
  }) {
  }

  ngOnInit() {
    this.latitude = this.data.latitude;
    this.longitude = this.data.longitude;
    // this.latitude = this.latitude + 0.012644400000002776;
    // this.longitude = this.longitude + 0.05518370000000061;
    this.markers = this.data.markers;
    this.distributors = this.data.distributors;
    this.bounds.extend(new google.maps.LatLng(this.latitude, this.longitude));
    this.markers.forEach((marker: MarkerInterface) => {
      this.bounds.extend(new google.maps.LatLng(marker.latitude, marker.longitude));
    });
  }

}
