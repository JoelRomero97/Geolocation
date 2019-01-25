import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DistributorInterface} from '../../util/data.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  distributors: Array<DistributorInterface>;
  latitude: number;
  longitude: number;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { distributors: Array<DistributorInterface> }) {
  }

  ngOnInit() {
    this.distributors = this.data.distributors;
    this.latitude = Number(this.distributors[0].point.split(' , ')[0]);
    this.longitude = Number(this.distributors[0].point.split(' , ')[1]);
    console.log(this.data.distributors);
  }

}
