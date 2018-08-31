import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { RouterExampleComponent } from './router-example/router-example.component';
import {Child1Component} from './router-example/children/child-1.component';
import {Child2Component} from './router-example/children/child-2.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    RouterExampleComponent,
    NotFoundComponent,
    Child1Component,
    Child2Component
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
