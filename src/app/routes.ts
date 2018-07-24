import { Routes } from "@angular/router";

import { HomepageComponent } from "./homepage/homepage.component";
import { ArticlePageComponent } from "./article-page/article-page.component";
import { CategoryPageComponent } from "./category-page/category-page.component";

export const appRoutes:Routes = [
    {path: 'article/:category', component:CategoryPageComponent},
    {path: 'article/:category/:title', component:ArticlePageComponent},
    {path: '', component:HomepageComponent}

];