import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/Cat';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getCats(): Observable<Cat[]> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get<Cat[]>(this.apiUrl, { headers });
  }

}
