import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/article';
import { ArticleStoreService } from 'src/app/store/article-store.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() article!: IArticle;
  searchTerm = '';

  constructor(private articleStoreService: ArticleStoreService) {
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

  public log(l: string) {
    this.searchTerm = l;
  }
}
