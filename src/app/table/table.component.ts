import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Students } from '../models/Students';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  title = 'latihan';
  students!: Students[];
  searchValue: string = '';


  ngOnInit(): void {
    this.initializingObject();
  }

  initializingObject() {
    this.students = [
      {
        nama: 'joko',
        jurusan: 'teknik',
        nilai: 70
      },
      {
        nama: 'joko anwar',
        jurusan: 'teknik dukun',
        nilai: 50
      },
      {
        nama: 'joko boro',
        jurusan: 'teknik awan',
        nilai: 55
      }
    ]
  }

  
  
}
