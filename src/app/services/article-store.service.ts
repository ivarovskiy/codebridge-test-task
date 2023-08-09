import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IArticle } from '../models/article'; // Подставьте вашу модель статьи

@Injectable({
  providedIn: 'root',
})
export class ArticleStoreService {
  private articlesSubject = new BehaviorSubject<IArticle[]>([]);
  articles$: Observable<IArticle[]> = this.articlesSubject.asObservable();

  updateArticles(articles: IArticle[]) {
    this.articlesSubject.next(articles);
  }
}
