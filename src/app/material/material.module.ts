import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatDialogModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ]
})
export class MaterialModule {
}
