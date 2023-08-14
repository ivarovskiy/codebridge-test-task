import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/article';
import { ArticleStoreService } from 'src/app/store/article-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() article!: IArticle;
  searchTerm = '';

  constructor(
    private articleStoreService: ArticleStoreService,
    private router: Router
  ) {
    this.article = {
      id: 0,
      title: '',
      url: '',
      image_url: '',
      news_site: '',
      summary: '',
      published_at: '',
    };
  }

  ngOnInit(): void {
    this.articleStoreService.filter$.subscribe(filter => this.log(filter));
  }

  public log(filter: string) {
    this.searchTerm = filter;
  }

  openArticle(): void {
    if (this.article) {
      this.router.navigate(['/article', this.article.id]);
    }
  }
}
