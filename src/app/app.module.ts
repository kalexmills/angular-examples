import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterExampleComponent } from './router-example/router-example.component';
import { NotFoundComponent } from './router-example/not-found.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    RouterExampleComponent,
    NotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
