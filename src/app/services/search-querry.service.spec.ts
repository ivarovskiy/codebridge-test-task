import { TestBed } from '@angular/core/testing';

import { SearchQuerryService } from './search-querry.service';

describe('SearchQuerryService', () => {
  let service: SearchQuerryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchQuerryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
