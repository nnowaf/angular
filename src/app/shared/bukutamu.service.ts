import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BukuTamu } from '../models/BukuTamu';

@Injectable({
  providedIn: 'root'
})
export class BukutamuService {

  constructor(private http: HttpClient) { }

  listKategori() :Observable<any> {
    return this.http.get(environment.baseUrl+'/kategori/list')
    .pipe(map(data => data))
  }

  listProduk() :Observable<any> {
    return this.http.get(environment.baseUrl+'/produk/list')
    .pipe(map(data => data))
  }

  simpanBuku(bukuTamu: BukuTamu): string {
    console.log("==========DARI SERVICE===============");
    console.log(bukuTamu);
    console.log("=========================");
    return "sukses";
  }
}
