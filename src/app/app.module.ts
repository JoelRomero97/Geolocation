import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {LayoutModule} from '@angular/cdk/layout';
import {MainComponent} from './main/main.component';
import {MapComponent} from './main/map/map.component';
import {DistributorsService} from './services/distributors.service';
import {GenericService} from './services/generic.service';
import {HttpClientModule} from '@angular/common/http';
import {ConstantsUtil} from './util/constants.util';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    GenericService,
    DistributorsService,
    ConstantsUtil,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    MapComponent,
  ]
})
export class AppModule {
}
