import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../models/kategorimodel/Kategori';
import { BukutamuService } from '../shared/bukutamu.service';

@Component({
  selector: 'app-listdepartment',
  templateUrl: './listdepartment.component.html',
  styleUrls: ['./listdepartment.component.css']
})
export class ListdepartmentComponent implements OnInit {
  listDepartment!: Department[]

  selectDepartment?: Department
  constructor(private serv : BukutamuService) { }

  ngOnInit(): void {
    this.getDepartment()
  }

  onSelect(hero: Department): void {
    this.selectDepartment = hero;
  }

  getDepartment() {
    this.serv.listDepartment().subscribe(
      {
        next: (hasil) => {
          this.listDepartment = hasil
        }
      }
    )
  }

}
