import {DomReuseComponent} from './dom-reuse/dom-reuse.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DomReuseRoutingModule} from './dom-reuse-routing.module';
import { ReuseListComponent } from './reuse-list/reuse-list.component';
import { ReuseDetailComponent } from './reuse-detail/reuse-detail.component';
import { ReuseHomeComponent } from './reuse-home/reuse-home.component';

@NgModule({
  imports: [
    CommonModule,
    DomReuseRoutingModule
  ],
  declarations: [
    DomReuseComponent,
    ReuseListComponent,
    ReuseDetailComponent,
    ReuseHomeComponent
  ]
})
export class DomReuseModule {}
