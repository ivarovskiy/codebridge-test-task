import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { IArticle } from '../../models/article';
import { SearchQuerryService } from 'src/app/services/search-querry.service';
import { ArticleStoreService } from 'src/app/services/article-store.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  // articles: IArticle[] = [];
  // searchTerm = '';

  constructor(
    private articleService: ArticleService,
    private readonly searchQuerryService: SearchQuerryService,
    private articleStoreService: ArticleStoreService
  ) {}

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(
      articles => {
        this.articleStoreService.updateArticles(articles);
        // console.log(this.articles);
      },
      error => {
        console.error('Error fetching articles:', error);
      }
    );

    this.searchQuerryService.querry$.subscribe(querry => this.log(querry));
  }

  private log(data: string): void {
    console.log(data);
    this.searchTerm = data;
  }
}
