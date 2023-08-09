import { Component } from '@angular/core';
import { SearchQuerryService } from 'src/app/services/search-querry.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  value = '';
  hide = true;

  constructor(private readonly searchQuerryService: SearchQuerryService) {}

  public onSearch(querry: string): void {
    this.searchQuerryService.setQuerry(querry);
  }
}
