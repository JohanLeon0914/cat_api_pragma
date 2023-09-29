import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/Cat';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.thecatapi.com/v1/breeds';
  private apiKey = 'bda53789-d59e46cd-9bc4-2936630fde39';

  constructor(private http: HttpClient) {}

  getCats(): Observable<Cat[]> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get<Cat[]>(this.apiUrl, { headers });
  }

}
