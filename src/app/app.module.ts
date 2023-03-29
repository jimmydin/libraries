import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMarceloLibModule } from 'ngx-marcelo-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMarceloLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
