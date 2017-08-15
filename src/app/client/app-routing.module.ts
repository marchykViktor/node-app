import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { AddArticleComponent } from "./add-article/add-article.component";
import { ArticleDetailsComponent } from "./article-details/article-details.component";

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            redirectTo: "blog",
            pathMatch: "full"
        },
      { path: "blog", component: BlogListComponent },
      { path: "blog/:id", component: ArticleDetailsComponent },
      { path: "create", component: AddArticleComponent },      
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule { }