import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BlogService, Article } from '../blog.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css'],
  template:
`<app-article [article]="article$ | async"></app-article>`
})
export class ArticlePageComponent implements OnInit {
  article$:Observable<Article>
  constructor(private route:ActivatedRoute,
              private location:Location,
              private blogservice:BlogService
  ) { }

  ngOnInit() {
    this.article$ = this.route.paramMap.pipe(
      switchMap((params:ParamMap)=>this.blogservice.getArticle(params.get('title'),params.get('category')))
    )
  }

}
