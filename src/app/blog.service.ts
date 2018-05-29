import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http:HttpClient) { }
  loadSiteMap():Observable<Sitemap>{
    return this.http.get<Sitemap>("/assets/sitemap.json");
  }
}

export class Sitemap{
  featured:string;
  articles:{[key:string]:Array<String>} 
}
