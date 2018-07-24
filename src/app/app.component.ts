import { Component, OnInit } from '@angular/core';
import { BlogService, Sitemap, Article } from './blog.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  categories$:Observable<Array<string>>;
  constructor(private blogService:BlogService,
              private router:Router){}
  ngOnInit(): void {
    this.categories$ = this.blogService.getCategories();
  }
  showCatogryArticles(category:string){
    this.router.navigate(['/article',category]);
  }
}
