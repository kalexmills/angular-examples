import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';
import { RouterExampleComponent } from './router-example/router-example.component';
import {Child1Component} from './router-example/children/child-1.component';
import {Child2Component} from './router-example/children/child-2.component';
import {ActivatedRouteComponent} from './router-example/children/activated-route.component';
import {BehaviorSubjectComponent} from './behavior-subject/behavior-subject.component';
import {FormsModule} from '@angular/forms';
import { ListenerComponent } from './behavior-subject/listener/listener.component';
import { SenderComponent } from './behavior-subject/sender/sender.component';
import {EventBusService} from './behavior-subject/event-bus.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    RouterExampleComponent,
    NotFoundComponent,
    Child1Component,
    Child2Component,
    ActivatedRouteComponent,
    BehaviorSubjectComponent,
    ListenerComponent,
    SenderComponent
  ],
  providers: [
    EventBusService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
