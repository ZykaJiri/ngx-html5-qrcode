import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxHtml5QrcodeModule} from '../../../src/public-api';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxHtml5QrcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
