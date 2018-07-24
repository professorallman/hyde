import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article, BlogService } from '../blog.service';

@Component({
  selector: 'app-homepage',
  styleUrls: ['./homepage.component.css'],
  template:`<ngx-md [path]="$featured|async"></ngx-md>`
})
export class HomepageComponent implements OnInit {
  $featured:Observable<string>
  constructor(private blogservice:BlogService) {

   }

  ngOnInit() {
    this.$featured = this.blogservice.getFeaturedArticle();
  }

}
