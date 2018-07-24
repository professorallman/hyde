import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import appRoutes from './routes';
import { AppComponent } from './app.component';
import { NgxMdModule } from 'ngx-md';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleSummaryComponent } from './article-summary/article-summary.component';
import { ArticleComponent } from './article/article.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleSummaryComponent,
    ArticleComponent,
    ArticlePageComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    NgxMdModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
