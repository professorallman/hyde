import { Component, OnInit } from '@angular/core';
import { BlogService, Sitemap } from './blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  sitemap:Sitemap;
  constructor(private blogService:BlogService){
    this.sitemap = {featured:'',articles:[]};
  }
  ngOnInit(): void {
    this.blogService.loadSiteMap().subscribe((sitemap)=>this.sitemap=sitemap);
  }
  
}
