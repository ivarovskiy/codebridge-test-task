import { Component, Input } from '@angular/core';
import { ArticleI } from 'src/app/models/article';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() article!: ArticleI; // Обратите внимание на '!' здесь

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
  }
}
