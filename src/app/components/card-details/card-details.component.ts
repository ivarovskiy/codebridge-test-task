import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IArticle } from 'src/app/models/article';
import { ArticleStoreService } from 'src/app/store/article-store.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
  article: IArticle | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleStoreService: ArticleStoreService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const articleId = parseInt(params.get('id') || '', 10);
      if (!isNaN(articleId)) {
        this.article = this.articleStoreService.getArticleById(articleId);
      }
    });
  }

  goHome(): void {
    this.router.navigate(['']);
  }
}
