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
    this.fixGithubSPA();
    this.categories$ = this.blogService.getCategories();
  }
  fixGithubSPA(){
    /* 
    The script from https://github.com/rafrex/spa-github-pages
    puts a extra slash in the pathname 
    //example
    check for that and navigate to it if it's present
    */
    const loc:string = decodeURIComponent(window.location.pathname);
    if(loc.substring(0,2) === "//"){
      this.router.navigate([loc]);
    }
  }
  showCatogryArticles(category:string){
    this.router.navigate(['/article',category]);
  }
}
