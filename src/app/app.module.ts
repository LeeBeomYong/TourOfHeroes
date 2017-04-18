import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent } from './hero-detail.component';
import {HeroService} from './hero.service';
import {HeroSearchComponent} from './hero-search.component';

//메모리에 데이터를 저장하기 위해 import
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//import meterial
//import { MdButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    //MdButtonModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//angular-in-memory-web-api
//npm i angular2-in-memory-web-api --save