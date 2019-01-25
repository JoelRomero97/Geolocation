import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {MapComponent} from './map/map.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onShowMap() {
    const dialogRef = this.dialog.open(MapComponent, {data: {}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
    console.log('Mostrar mapas');
  }

}
