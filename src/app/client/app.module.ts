import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { BlogListComponent, 
         AppRoutingModule, 
         ApiService, 
         ApiHandlerService, 
         AddArticleComponent, 
         ArticleDetailsComponent, 
         HeaderComponent, 
         FooterComponent } from './index';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    AddArticleComponent,
    ArticleDetailsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ApiService, ApiHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
