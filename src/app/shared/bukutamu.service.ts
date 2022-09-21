import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BukuTamu } from '../models/BukuTamu';
import { Halaman } from '../models/halamanmodel/Halaman';

@Injectable({
  providedIn: 'root'
})
export class BukutamuService {

  constructor(private http: HttpClient) { }

  listKategori(page: Halaman) :Observable<any> {
    return this.http.post(environment.baseUrl+'/kategori/post', page)
    .pipe(map(data => data))
  }

  listDepartment() : Observable<any> {
    return this.http.get(environment.baseUrl+'/department/list')
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
