import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  featured:string;
  constructor(private blogService:BlogService){}
  ngOnInit(): void {
    this.blogService.loadSiteMap().subscribe((siteMap)=>this.featured=siteMap.featured);
  }
  
}
