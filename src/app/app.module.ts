import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxMdModule} from 'ngx-md';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleSummaryComponent } from './article-summary/article-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleSummaryComponent
  ],
  imports: [
    BrowserModule,
    NgxMdModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
