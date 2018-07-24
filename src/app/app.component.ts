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
  sitemap:Sitemap;
  constructor(private blogService:BlogService,
              private router:Router){
    this.sitemap = {featured:'',articles:[]};
  }
  ngOnInit(): void {
    this.blogService.loadSiteMap().subscribe((sitemap)=>this.sitemap=sitemap);
  }
  showArticle(article:Article){
    this.router.navigate(['/article',article.title])
  }
}
