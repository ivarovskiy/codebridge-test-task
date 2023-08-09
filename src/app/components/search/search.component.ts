import { Component } from '@angular/core';
import { ArticleStoreService } from '../../store/article-store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  hide = true;
  searchTerm = '';

  constructor(private readonly articleStoreService: ArticleStoreService) {}

  onSearch(querry: string) {
    this.articleStoreService.updateFilter(querry);
  }

  clear() {
    this.searchTerm = '';
    this.onSearch(this.searchTerm);
  }
}
