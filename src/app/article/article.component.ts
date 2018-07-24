import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../blog.service';

@Component({
  selector: 'app-article',
  styleUrls: ['./article.component.css'],
  template:
`<article *ngIf="article">
  <h1>{{article.title}}</h1>
  <h5>{{article.category}}</h5>
  <time>{{article.posted}}</time>
  <ngx-md [path]="article.markdownLink"></ngx-md>
</article>`
})
export class ArticleComponent implements OnInit {
  @Input() article:Article
  ngOnInit() {}

}
