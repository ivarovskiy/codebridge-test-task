import { Component, OnInit } from '@angular/core';
import { ArticleStoreService } from './store/article-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'codebridge-test-task';
  articlesLoaded = false;

  constructor(private articleStoreService: ArticleStoreService) {}

  ngOnInit() {
    this.articleStoreService.loadArticles();
    this.articleStoreService.articles$.subscribe(articles => {
      if (articles.length > 0) {
        this.articlesLoaded = true;
      }
    });
  }
}
