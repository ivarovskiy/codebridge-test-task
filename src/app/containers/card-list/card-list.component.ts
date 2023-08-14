import { Component, OnInit } from '@angular/core';
import { IArticle } from '../../models/article';
import { ArticleStoreService } from 'src/app/store/article-store.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  articles: IArticle[] = [];
  filteredArticles: IArticle[] = [];

  pageSizeOptions = [10, 25, 50, 100];
  pageSize = 10;
  currentPage = 0;

  constructor(private articleStoreService: ArticleStoreService) {}

  ngOnInit(): void {
    this.articleStoreService.loadArticles();

    combineLatest([
      this.articleStoreService.articles$,
      this.articleStoreService.filter$,
    ])
      .pipe(
        map(([articles, filter]) => {
          const priorityArticles: IArticle[] = [];
          const nonPriorityArticles: IArticle[] = [];

          articles.forEach(article => {
            if (article.title.toLowerCase().includes(filter.toLowerCase())) {
              priorityArticles.push(article);
            } else if (
              article.summary.toLowerCase().includes(filter.toLowerCase())
            ) {
              nonPriorityArticles.push(article);
            }
          });

          return priorityArticles.concat(nonPriorityArticles);
        })
      )
      .subscribe(filteredArticles => {
        this.filteredArticles = filteredArticles;

        this.currentPage = 0;
        this.updateDisplayedArticles();
      });
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updateDisplayedArticles();
  }

  updateDisplayedArticles() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.articles = this.filteredArticles.slice(startIndex, endIndex);
  }
}
