import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {MapComponent} from './map/map.component';
import {DistributorsService} from '../services/distributors.service';
import {DataInterface, MarkerInterface, PositionInterface} from '../util/data.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  markers: Array<MarkerInterface> = [];

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
          for (const distributor of response.Response) {
            const latitude = Number(distributor.point.split(' , ')[0]);
            const longitude = Number(distributor.point.split(' , ')[1]);
            this.markers.push({latitude: latitude, longitude: longitude});
          }
          const dialogRef = this.dialog.open(MapComponent, {data: {distributors: response.Response, markers: this.markers}});
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
