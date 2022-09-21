import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestBody } from '../models/usermodel/users';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }


  createDepartment(body: RequestBody){
    return this.http.post(environment.baseUrl+'/department/post', body, {observe : 'response'})
  }
}
