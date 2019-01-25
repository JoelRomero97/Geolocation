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

  constructor(@Inject(MAT_DIALOG_DATA) public data: { distributors: Array<DistributorInterface>, markers: Array<MarkerInterface> }) {
  }

  ngOnInit() {
    this.distributors = this.data.distributors;
    this.markers = this.data.markers;
    console.log(this.data.distributors);
    console.log(this.data.markers);
  }

}
