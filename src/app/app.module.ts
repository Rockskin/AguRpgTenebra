import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { M5glossaryComponent } from './/M5/m5glossary/m5glossary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TopComponent } from './nav/top/top.component';

@NgModule({
  declarations: [
    AppComponent, M5glossaryComponent, HomeComponent, TopComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonToggleModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
