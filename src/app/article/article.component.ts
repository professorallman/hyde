import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../blog.service';

@Component({
  selector: 'app-article',
  styleUrls: ['./article.component.css'],
  template:
`<article *ngIf="article">
  <h1>{{article.title}}</h1>
  <time>{{article.posted}}</time>
  <hr/>
  <ngx-md [path]="article.markdownLink"></ngx-md>
</article>`
})
export class ArticleComponent implements OnInit {
  @Input() article:Article
  ngOnInit() {}

}
