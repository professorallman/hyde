import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http:HttpClient) { }
  loadSiteMap():Observable<Sitemap>{
    return this.http.get<Sitemap>("/assets/sitemap.json");
  }
  getArticle(title:string):Observable<Article>{
    return this.loadSiteMap().pipe(
      map((sitemap)=>this.findArticle(sitemap,title))
    )
  }
  getFeaturedArticle():Observable<string>{
    return this.loadSiteMap().pipe(
      map((sitemap)=>sitemap.featured)
    );
  }
  private findArticle(sitemap:Sitemap,title:string):Article{
    return sitemap.articles.filter((article)=>article.title === title)[0];
  }

}

export class Sitemap{
  featured:string;
  articles:Array<Article>
}
export class Article{
  title:string
  category:string
  summary:string
  posted:Date
  markdownLink:URL
}