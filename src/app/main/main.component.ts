import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {MapComponent} from './map/map.component';
import {DistributorsService} from '../services/distributors.service';
import {DataInterface, PositionInterface} from '../util/data.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private distributorsService: DistributorsService) {
  }

  ngOnInit() {
  }

  onShowMap() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: PositionInterface) => {
        this.distributorsService.closest({
          'longitude': position.coords.longitude,
          'latitude': position.coords.latitude
        }).subscribe((response: DataInterface) => {
          const dialogRef = this.dialog.open(MapComponent, {data: {distributors: response.Response}});
          dialogRef.afterClosed().subscribe(result => {
            console.log(result);
          });
        }, (error: DataInterface) => {
          console.log(error.ErrorMessage);
        });
      });
    } else {
      console.log('Geolocation not supported');
    }
  }

}
