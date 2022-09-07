import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { BukuTamu } from '../models/BukuTamu';
import { BukutamuService } from '../shared/bukutamu.service';

@Component({
  selector: 'app-bukutamu',
  templateUrl: './bukutamu.component.html',
  styleUrls: ['./bukutamu.component.css']
})
export class BukutamuComponent implements OnInit {
  formKontak!: FormGroup;
  constructor(private formBuild: FormBuilder, private btService: BukutamuService) { }
  cekboxVal!: Array<any>;

  ngOnInit(): void {
    this.formKontak = this.formBuild.group({
      "nama" : new FormControl(null, [Validators.required, Validators.minLength(3)]),
      "alamat" : new FormControl(null, Validators.required),
      "email" : new FormControl(null, [Validators.email, Validators.required]),
      "notelp" : new FormControl(null, Validators.required),
      "radio" : new FormControl(null, Validators.required),
      "checkbox" : new FormArray([
        new FormControl(3),
        new FormControl(4),
        new FormControl(5),
      ]),
    })
  }

  simpan(): void {
    let bukuTamu = new BukuTamu;

    bukuTamu.nama  = this.formKontak.controls['nama'].value;
    bukuTamu.alamat = this.formKontak.controls['alamat'].value;
    bukuTamu.email = this.formKontak.controls['email'].value;
    bukuTamu.notelp = this.formKontak.controls['notelp'].value;
    bukuTamu.radio = this.formKontak.controls['radio'].value;
    bukuTamu.checkbox = this.cekboxVal;
    console.log(this.formKontak.controls['checkbox'].value);
    this.btService.simpanBuku(bukuTamu);

  }

  getVal(even: any) {
    if(even.target.checked) {
      this.cekboxVal.push(even.target.value);
    }
   
  }

}
