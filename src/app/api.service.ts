import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getWPApi(): Observable<any> {
    const heroesURL = 'https://wordpress.org/news/wp-json/wp/v2/posts?per_page=20';
    
    return this.http.get(heroesURL);
  }
}
 