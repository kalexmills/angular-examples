import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouterExampleComponent} from './router-example/router-example.component';
import {NotFoundComponent} from './router-example/not-found.component';


const appRoutes: Routes = [
  {
    path: '',
    component: RouterExampleComponent
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
