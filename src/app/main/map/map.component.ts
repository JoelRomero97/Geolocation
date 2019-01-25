import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DistributorInterface, MarkerInterface} from '../../util/data.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  distributors: Array<DistributorInterface> = [];
  markers: Array<MarkerInterface> = [];
  latitude: number;
  longitude: number;

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
    this.markers = this.data.markers;
    this.distributors = this.data.distributors;
    console.log(this.data.distributors);
    console.log(this.data.markers);
  }

}
