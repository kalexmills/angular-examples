import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DomReuseComponent} from './dom-reuse/dom-reuse.component';
import {ReuseListComponent} from './reuse-list/reuse-list.component';
import {ReuseDetailComponent} from './reuse-detail/reuse-detail.component';
import {ReuseHomeComponent} from './reuse-home/reuse-home.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

// Feature module defines its own routes.
const routes = [
  { path: 'dom-reuse',
    component: DomReuseComponent,
    children: [
      {
        path: '',
        component: ReuseListComponent,
        children: [
          {
            path: ':id',
            component: ReuseDetailComponent,
          },
          {
            path: '',
            component: ReuseHomeComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DomReuseRoutingModule {}
