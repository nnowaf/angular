import { Component, OnInit } from '@angular/core';
import { Produk } from '../models/produkmodel/Produk';
import { BukutamuService } from '../shared/bukutamu.service';

@Component({
  selector: 'app-listkategori',
  templateUrl: './listkategori.component.html',
  styleUrls: ['./listkategori.component.css']
})
export class ListkategoriComponent implements OnInit {

  constructor(private bukuService: BukutamuService) { }
  listProduk!: Produk[]

  ngOnInit(): void {
    this.bukuService.listProduk().subscribe(
      (hasil: any) => {
        this.listProduk = hasil
      }, (error) => {
        console.log(error)
      }
    )
  }

}
