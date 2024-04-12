import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RazaServiceService {

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<any> {
    return this.http.post<any>('http://backend:3000/raza', data);
  }

  getAllData(): Observable<any> {
    return this.http.get<any>('http://backend:3000/raza');
  }
 }
