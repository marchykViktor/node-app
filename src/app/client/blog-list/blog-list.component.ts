import { Component, OnInit } from '@angular/core';
import { Article } from '../index';
import { ApiHandlerService } from '../shared/api-handler.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(private apiHandler: ApiHandlerService, private route: Router) { }

  articles: Article[];

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.apiHandler.getArticles().subscribe(response => {
      this.articles = response;
      if (this.articles.length === 0) this.route.navigate(["/create"]);
    }, error => {
      console.log(error);
    })
  }

}
