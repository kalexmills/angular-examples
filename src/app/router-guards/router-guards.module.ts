import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ProtectedComponent} from './protected/protected.component';
import {RouterGuardsRoutingModule} from './router-guards-routing.module';
import {UnprotectedComponent} from './unprotected/unprotected.component';
import {RouterGuardsComponent} from './router-guards.component';
import {RouteGuardService} from './route-guard.service';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth.service';
import {LoginGuardService} from './login-guard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterGuardsRoutingModule
  ],
  declarations: [
    ProtectedComponent,
    UnprotectedComponent,
    RouterGuardsComponent,
    LoginComponent,
  ],
  providers: [
    RouteGuardService,
    LoginGuardService,
    AuthService
  ]
})
export class RouterGuardsModule {}
