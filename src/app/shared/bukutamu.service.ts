import { Injectable } from '@angular/core';
import { BukuTamu } from '../models/BukuTamu';

@Injectable({
  providedIn: 'root'
})
export class BukutamuService {

  constructor() { }

  simpanBuku(bukuTamu: BukuTamu): string {
    console.log("==========DARI SERVICE===============");
    console.log(bukuTamu.checkbox);
    console.log("=========================");
    return "sukses";
  }
}
