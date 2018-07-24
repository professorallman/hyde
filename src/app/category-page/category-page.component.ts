import { Component, OnInit } from '@angular/core';
import { BlogService, Article } from '../blog.service';
import { Observable } from 'rxjs';
import { Route, ActivatedRoute,ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css'],
  template:
` <app-article-list [articles]="articles$ | async" (articleSelected)="showArticle($event)"></app-article-list>`
})
export class CategoryPageComponent implements OnInit {
  articles$:Observable<Array<Article>>
  constructor(private blogservice:BlogService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.articles$ = this.route.paramMap.pipe(
      switchMap((params:ParamMap)=>this.blogservice.getArticlesForCategory(params.get('category')))
    )
  }
  showArticle(article:Article){
    this.router.navigate(['/article',article.category,article.title]);
  }
}
