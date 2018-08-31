import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from './not-found.component';
import {RouterExampleComponent} from './router-example/router-example.component';
import {Child1Component} from './router-example/children/child-1.component';
import {Child2Component} from './router-example/children/child-2.component';
import {ActivatedRouteComponent} from './router-example/children/activated-route.component';
import {BehaviorSubjectComponent} from './behavior-subject/behavior-subject.component';


const appRoutes: Routes = [
  {
    path: 'router-example',
    component: RouterExampleComponent,
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component },
      { path: 'activated-route', component: ActivatedRouteComponent }
    ]
  },
  {
    path: 'behavior-subject',
    component: BehaviorSubjectComponent
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
