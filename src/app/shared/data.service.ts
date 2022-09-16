import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUserResponse, RequestBody } from '../models/usermodel/users';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = 'https://reqres.in';

  constructor(private http: HttpClient) { }

  getDataUser(page : number): Observable<HttpResponse<GetUserResponse>>{
    let params = new HttpParams();
    params = params.append('page', page);
    return this.http.get<GetUserResponse>(`${this.baseUrl}/api/users`,
    {
      params : params,
      observe : 'response'
    });
  }

  createUser(body: RequestBody){
    return this.http.post(`${this.baseUrl}/api/users`, body, {observe : 'response'})
  }
}
