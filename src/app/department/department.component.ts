import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartmentService } from '../shared/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  formInput!: FormGroup

  constructor(private depServ: DepartmentService, private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.formInput = this.formBuild.group(
      {
        'depName' : this.formBuild.control(null),
        'descDep' : this.formBuild.control(null)
      }
    )
  }

  createDepartment() {
    this.depServ.createDepartment(this.formInput.value).subscribe(
      resp => {
        if (resp.status == 200) {
          alert('create sukses');
        } else {
          alert('create failed');
        }
      }
    )
  }

}
