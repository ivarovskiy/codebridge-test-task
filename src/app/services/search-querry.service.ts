import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchQuerryService {
  public querry$ = new Subject<string>();

  public setQuerry(querry: string) {
    this.querry$.next(querry);
  }

  public getQuerry() {
    return this.querry$;
  }
}
