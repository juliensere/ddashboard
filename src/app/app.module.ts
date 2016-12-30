import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EndpointDetailComponent } from './endpoint-detail.component'
import { MaxLengthPipe } from "./maxLengthPipe"
import { DurationPipe } from "./durationPipe"

@NgModule({
  declarations: [
    AppComponent,
    EndpointDetailComponent,
    MaxLengthPipe,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
