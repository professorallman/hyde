import { Routes } from "@angular/router";

import { HomepageComponent } from "./homepage/homepage.component";
import { ArticlePageComponent } from "./article-page/article-page.component";

const appRoutes:Routes = [
    {path: 'article/:title', component:ArticlePageComponent},
    {path: '', component:HomepageComponent}

];

export default appRoutes;