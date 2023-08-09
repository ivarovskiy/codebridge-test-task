import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IArticle } from '../models/article';
import { ArticleService } from '../services/article.service';

@Injectable({
  providedIn: 'root',
})
export class ArticleStoreService {
  private articlesSubject = new BehaviorSubject<IArticle[]>([]);
  articles$: Observable<IArticle[]> = this.articlesSubject.asObservable();

  private filterSubject = new BehaviorSubject<string>('');
  filter$: Observable<string> = this.filterSubject.asObservable();

  constructor(private articleService: ArticleService) {}

  loadArticles() {
    this.articleService.getArticles().subscribe(
      articles => {
        this.articlesSubject.next(articles);
        console.log(articles);
      },
      error => {
        console.error('Error fetching articles:', error);
      }
    );
  }

  updateFilter(filter: string) {
    this.filterSubject.next(filter);
  }
}
