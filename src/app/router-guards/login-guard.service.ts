import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterState, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  constructor(private authSvc: AuthService, private  router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    const url: string = state.url;

    console.log('Checked LoginGuardService');
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authSvc.isLoggedIn) { return true; }

    // Store the attempted url for redirecting.
    this.authSvc.redirectURL = url;

    this.router.navigate(['router-guards/login']);
    return false;
}
}
