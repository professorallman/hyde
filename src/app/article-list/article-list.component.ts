import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Article } from '../blog.service';

@Component({
  selector: 'app-article-list',
  styleUrls: ['./article-list.component.css'],
  template:`<section *ngFor="let article of articles" (click)="selected(article)">
                <app-article-summary [article]="article"></app-article-summary>
            </section>
  `
})
export class ArticleListComponent implements OnInit {
  @Input() articles:Array<Article>;
  @Output() articleSelected:EventEmitter<Article> = new EventEmitter();
  ngOnInit() {}
  selected(article:Article){
    this.articleSelected.emit(article);
  }

}
