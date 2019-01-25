import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {MapComponent} from './map/map.component';
import {DistributorsService} from '../services/distributors.service';
import {DataInterface} from '../util/data.interface';

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
    this.distributorsService.closest({'longitude': '-99.062718', 'latitude': '19.626423'}).subscribe((response: DataInterface) => {
      const dialogRef = this.dialog.open(MapComponent, {data: {distributors: response.Response}});
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
      });
    }, (error: DataInterface) => {
      console.log(error.ErrorMessage);
    });
  }

}
