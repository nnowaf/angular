import { Component, OnInit } from '@angular/core';
import { Kategori } from '../models/kategorimodel/Kategori';
import { BukutamuService } from '../shared/bukutamu.service';

@Component({
  selector: 'app-listproduk',
  templateUrl: './listproduk.component.html',
  styleUrls: ['./listproduk.component.css']
})
export class ListprodukComponent implements OnInit {

  constructor(private bukuService: BukutamuService) { }
  listKategori! : Kategori[]

  ngOnInit(): void {
    this.bukuService.listKategori().subscribe(
      (hasil: any) => {
        this.listKategori = hasil
        
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
