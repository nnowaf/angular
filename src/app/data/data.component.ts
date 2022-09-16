import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BukuTamu } from '../models/BukuTamu';
import { DataUser } from '../models/usermodel/users';
import { BukutamuService } from '../shared/bukutamu.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  dataUser: DataUser[] = [];
  page!: number;
  formInput!: FormGroup

  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      name : this.formBuilder.control(null),
      job : this.formBuilder.control(null)
    })
  }

  getData() {
    this.dataService.getDataUser(this.page).subscribe(data => {
      
      if (data.status === 200) {
        this.dataUser = data.body?.data!;
        console.log(this.dataUser);
      } 
      
    }, (error) => {
      console.log(`error : ${error}`);
    })
  }

  createUser() {
    this.dataService.createUser(this.formInput.value).subscribe(
      resp => {
        if (resp.status == 201) {
          alert('create sukses');
        } else {
          alert('create failed');
        }
      }
    )
  }
}
