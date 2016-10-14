import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';

import { HttpService } from './services/http.service';
import { AppConfig } from './app.config';
import { VideoListComponent } from './video-list/video-list.component';
import { AppRoutingModule, routingComponents } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    VideoListComponent,
    routingComponents
  ],
  providers: [
    AppConfig,
    HttpService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }