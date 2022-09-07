import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootcamp';
  isLogin: boolean = false;

  constructor(private authService: AuthService, private route:Router) { }

  ngOnInit() {
    this.getAuth();
  }

  login() {
    this.authService.login();
    this.getAuth();
  }

  getAuth() {
    this.isLogin = this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.getAuth();
    this.route.navigate(['home']);
  }
}
