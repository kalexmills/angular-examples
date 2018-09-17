import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {UnprotectedComponent} from './unprotected/unprotected.component';
import {ProtectedComponent} from './protected/protected.component';
import {RouteGuardService} from './route-guard.service';
import {RouterGuardsComponent} from './router-guards.component';
import {LoginComponent} from './login/login.component';
import {LoginGuardService} from './login-guard.service';

// Feature module defines its own routes.
const routes = [
  {
    path: 'router-guards',
    component: RouterGuardsComponent,
    children: [
      {
        path: 'unprotected',
        component: UnprotectedComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'protected-by-route-guard',
        component: ProtectedComponent,
        canActivate: [RouteGuardService],
      },
      {
        path: 'protected-by-login',
        component: ProtectedComponent,
        canActivate: [LoginGuardService],
      },
      {
        path: '',
        redirectTo: './unprotected',
        pathMatch: 'full',
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RouterGuardsRoutingModule {}
