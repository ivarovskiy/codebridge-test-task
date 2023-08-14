import { Component, OnInit } from '@angular/core';
import { ArticleStoreService } from 'src/app/store/article-store.service';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss'],
})
export class PageContentComponent implements OnInit {
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
