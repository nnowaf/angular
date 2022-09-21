import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Halaman } from '../models/halamanmodel/Halaman';
import { Department, Kategori } from '../models/kategorimodel/Kategori';
import { BukutamuService } from '../shared/bukutamu.service';

@Component({
  selector: 'app-listproduk',
  templateUrl: './listproduk.component.html',
  styleUrls: ['./listproduk.component.css']
})
export class ListprodukComponent implements OnInit {

  constructor(private bukuService: BukutamuService, private formBuild: FormBuilder) { }
  formCari! : FormGroup
  formPage! : FormGroup
  listKategori! : Kategori[]
  listDepartment! : Department[]
  jumlahPerPage = [2, 5, 10, 15, 20, 25, 100]
  hal = new Halaman()

  sizeChangeEvent() {
    this.hal = new Halaman()
    this.hal.size = parseInt(this.formPage.controls['size'].value)
    this.getCariKategori()
  }

  getKategory() {
    this.bukuService.listKategori(this.hal).subscribe(
      (hasil: any) => {
        if (hasil && hasil.data) {
          this.hal = hasil.hal
          this.listKategori = hasil.data
        } else {
          this.listKategori = []
          this.hal = new Halaman()
        }
        
      },
      (error) => {
        console.log(error)
      }
    )
  }

  getDepartment() {
    this.bukuService.listDepartment().subscribe(
      {
        next : (hasil) => {
          this.listDepartment = hasil
        }
      }
    )
  }

  pageChangeEvent(event: number) {
    console.log(this.hal)
    this.hal.pagenumber = event;
    this.getKategory();
  }

  ngOnInit(): void {
    this.formPage = this.formBuild.group(
      {
        'size' : new FormControl(this.hal.size)
      }
    )
    this.formCari = this.formBuild.group(
      {
        'nama' : new FormControl(),
        'dpdown' : new FormControl()
      }
    )
    this.getKategory();
    this.getDepartment();
  }

  getCariKategori() {
    this.hal.pagenumber = 0;
    this.hal.param = {
      'nama' : this.formCari.controls['nama'].value,
      'dpdown' : this.formCari.controls['dpdown'].value
    }
    this.getKategory()
  }


}
