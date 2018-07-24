import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../blog.service';

@Component({
  selector: 'app-article-summary',
  styleUrls: ['./article-summary.component.css'],
  template:
`<summary>
  <time>{{article.posted}}</time>
  <p>{{article.summary}}</p>
</summary>`
})
export class ArticleSummaryComponent implements OnInit {
  @Input() article:Article;
  ngOnInit() {}

}
