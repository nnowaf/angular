import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin: boolean = false;
  constructor() { }

  login() {
    this.isLogin = true;
  }

  logout() {
    this.isLogin = false;
  }

  isAuthenticated() {
    return this.isLogin;
  }
}
