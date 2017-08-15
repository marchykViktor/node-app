import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Article } from '../index';
import { ApiHandlerService } from '../shared/api-handler.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  id: string;

  article: Article;

  constructor(private activatedRoute: ActivatedRoute, private apiHandler: ApiHandlerService) { }

  ngOnInit() {
    this.loadArticle()
  }

  loadArticle(){
    this.activatedRoute.params.forEach((params: Params) => {
      this.id = params['id'];
    });
    this.apiHandler.getArticle(this.id).subscribe(response => {
      this.article = response;
    }, error => {
      console.log(error);
    })

  }

}
