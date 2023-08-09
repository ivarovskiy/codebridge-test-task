import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from 'src/app/models/article';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() article!: IArticle;
  @Input() search: string;

  constructor() {
    this.article = {
      id: 0,
      title: '',
      url: '',
      image_url: '',
      news_site: '',
      summary: '',
      published_at: '',
    };
    this.search = '';
  }
}
