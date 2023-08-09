import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ArticleListComponent } from './containers/article-list/article-list.component';
import { CustomDatePipe } from './pipes/date/custom-date.pipe';
import { SummaryTruncatePipe } from './pipes/summary/summary-truncate.pipe';
import { HighlightSearchPipe } from './pipes/highlight-search/highlight-search.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchWrapperComponent } from './containers/search-wrapper/search-wrapper.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CardComponent,
    LoaderComponent,
    ArticleListComponent,
    CustomDatePipe,
    SummaryTruncatePipe,
    HighlightSearchPipe,
    SearchWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
