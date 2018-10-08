import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Education } from './education.component';
import { WorkExperience } from './workexperience.component';
import { Portfolio } from './portfolio.component';
import { About } from './about';
import { Contact } from './contact';
import { Profile } from './profile';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {NGXChartsComponent} from "./ngx-charts.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {AboutblockComponent} from "./aboutblock.component";







@NgModule({
  declarations: [
    AppComponent, WorkExperience, Education, Portfolio, About, Contact, Profile,NGXChartsComponent, AboutblockComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule, NgxChartsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent,Education, WorkExperience, Portfolio, About, Contact, Profile, NGXChartsComponent,AboutblockComponent]
})
export class AppModule { }
