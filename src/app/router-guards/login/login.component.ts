import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(public loginService: AuthService, private router: Router) { }

  ngOnInit() {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.loginService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.loginService.login().subscribe(() => {
      this.setMessage();
      if (this.loginService.isLoggedIn) {
        const redirect = this.loginService.redirectURL ? this.loginService.redirectURL : 'router-guards/protected-by-login';

        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.loginService.logout();
    this.setMessage();
  }

}
