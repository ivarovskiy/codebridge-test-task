import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleI } from '../models/article';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = 'https://api.spaceflightnewsapi.net/v4/articles';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<ArticleI[]> {
    const params = new HttpParams().set('limit', '10');
    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(response => response.results) // Вернуть только массив results
    );
  }
}
