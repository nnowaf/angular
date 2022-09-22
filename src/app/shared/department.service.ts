import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Department } from '../models/kategorimodel/Kategori';
import { RequestBody } from '../models/usermodel/users';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }


  createDepartment(dept: Department): Observable<any>{
    return this.http.post(environment.baseUrl+'/department/post', dept)
    .pipe(map(data => data))
  }


  getDeptById( id: string): Observable<any> {
    return this.http.get(environment.baseUrl+'/department/'+id)
    .pipe(map(data => data))
  }
}
