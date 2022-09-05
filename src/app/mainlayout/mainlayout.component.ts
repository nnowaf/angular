import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.css']
})
export class MainlayoutComponent implements OnInit {

  constructor() { }
  tampilHilang : string = "display:none;";


  ngOnInit(): void {
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
}
