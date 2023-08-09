import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { IArticle } from '../../models/article';
import { ArticleStoreService } from 'src/app/services/article-store.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles: IArticle[] = [];
  filteredArticles: IArticle[] = [];

  constructor(private articleStoreService: ArticleStoreService) {}

  ngOnInit(): void {
    this.articleStoreService.loadArticles();

    combineLatest([
      this.articleStoreService.articles$,
      this.articleStoreService.filter$,
    ])
      .pipe(
        map(([articles, filter]) =>
          articles.filter(article =>
            article.title.toLowerCase().includes(filter.toLowerCase())
          )
        )
      )
      .subscribe(filteredArticles => {
        this.filteredArticles = filteredArticles;
      });
  }
}
