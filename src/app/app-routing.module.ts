import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { PageContentComponent } from './containers/page-content/page-content.component';

const routes: Routes = [
  { path: '', component: PageContentComponent },
  { path: 'article/:id', component: CardDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
