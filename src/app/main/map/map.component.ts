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

  constructor(@Inject(MAT_DIALOG_DATA) public data: { distributors: Array<DistributorInterface> }) {
  }

  ngOnInit() {
    this.distributors = this.data.distributors;
    console.log(this.data.distributors);
  }

}
