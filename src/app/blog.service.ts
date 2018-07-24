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
  getArticlesForCategory(category:string){
    return this.loadSiteMap().pipe(
      map((siteMap)=>siteMap.categories[category])
    );
  }
  getArticle(title:string,category:string):Observable<Article>{
    return this.loadSiteMap().pipe(
      map((sitemap)=>this.findArticle(sitemap,title,category))
    )
  }
  getFeaturedArticle():Observable<string>{
    return this.loadSiteMap().pipe(
      map((sitemap)=>sitemap.featured)
    );
  }
  getCategories():Observable<Array<string>>{
    return this.loadSiteMap().pipe(
      map((sitemap)=>Object.keys(sitemap.categories))
    )
  }
  private findArticle(sitemap:Sitemap,title:string,category:string):Article{
    console.log(sitemap.categories,category,sitemap.categories[category]);
    return sitemap.categories[category].filter((article)=>article.title === title)[0];
  }

}

export class Sitemap{
  featured:string;
  categories:{[category:string]:Array<Article>}
}
export class Article{
  title:string
  category:string
  summary:string
  posted:Date
  markdownLink:URL
}