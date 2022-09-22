import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Department } from '../models/kategorimodel/Kategori';
import { DepartmentService } from '../shared/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  formInput!: FormGroup

  constructor(
    private depServ: DepartmentService, 
    private formBuild: FormBuilder,
    private actRoute: ActivatedRoute) {
      this.formInput = this.formBuild.group(
        {
          'depName' : this.formBuild.control(null, [Validators.required, Validators.minLength(3)]),
          'descDep' : this.formBuild.control(null, Validators.required)
        }
      )
    }

  ngOnInit(): void {
    let deptId = this.actRoute.snapshot.params['id'];

    console.log(deptId)
    if (deptId) {
      this.depServ.getDeptById(deptId).subscribe(
        {
          next: (hasil) => {
            this.formInput = this.formBuild.group(
              {
                'depName' : this.formBuild.control(hasil.depName, [Validators.required, Validators.minLength(3)]),
                'descDep' : this.formBuild.control(hasil.descDep, Validators.required)
              }
            )
          }
        }
      )
    }
  }

  createDepartment() {
    console.log(this.formInput)
      if(this.formInput.valid) {
        let dept = new Department()
        dept.depName = this.formInput.controls['depName'].value
        dept.descDep = this.formInput.controls['descDep'].value
        this.depServ.createDepartment(dept).subscribe(
          {
            next: (hasil) => {
              console.log(hasil)
              alert("Simpan Berhasil")
            }
          }
        )
      } else {
        alert("Form Wajib Diisi")
      }
  }

}
