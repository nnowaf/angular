import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.css']
})
export class MainlayoutComponent implements OnInit {
  title = 'bootcamp';
  isLogin: boolean = false;

  constructor(private authService: AuthService, private route:Router) { }

  tampilHilang : string = "display:none;";


  ngOnInit() {
    this.getAuth();
  }

  bukaTutup(): void {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');

    if (sidebarToggle) {
      document.body.classList.toggle('sb-sidenav-toggled');
    }
  }

  dropDown(): void {
    if(this.tampilHilang === "display:none;") {
      this.tampilHilang = "display:block; left:-98px";
    } else {
      this.tampilHilang = "display:none;";
    }
  }

  collapse(param: string): void {
    const collapseLayoutsDiv = document.getElementById(param);
    if (collapseLayoutsDiv?.style.display === "block") {
      collapseLayoutsDiv.style.display = "none";
    } else {
      if (collapseLayoutsDiv) {
        collapseLayoutsDiv.style.display = "block";
      }
    }
  } 

  login() {
    this.authService.login();
    this.getAuth();
    this.route.navigate(['data']);
  }

  getAuth() {
    this.isLogin = this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.getAuth();
    this.route.navigate(['']);
  }
}
