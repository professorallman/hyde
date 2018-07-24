import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../blog.service';

@Component({
  selector: 'app-category-list',
  styleUrls: ['./category-list.component.css'],
  template:
`<section *ngFor="let category of categories" (click)="selected(category)">
    <h1>{{category}}</h1>
  </section>`
})
export class CategoryListComponent implements OnInit {
  @Input() categories:Array<string>;
  @Output() categorySelected:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  selected(category:string){
    this.categorySelected.emit(category);
  }

}
