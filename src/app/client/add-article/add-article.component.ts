import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { ApiHandlerService } from '../shared/api-handler.service';
import { Article } from '../index';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  addForm: FormGroup;
  id: string;
  article: Article;
  loadToggle: boolean = false;

  constructor(private apiHandler: ApiHandlerService, 
              private activatedRoute: ActivatedRoute, 
              private route: Router) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      title: new FormControl(),
      body: new FormControl()
    });

    this.activatedRoute.params.forEach((params: Params) => {
      this.id = params['id'];
      this.id !== undefined ? this.loadArticle( this.id ) : this.loadToggle = true;
    });
  }

  loadArticle( id ){
    this.apiHandler.getArticle(this.id).subscribe(response => {
      this.article = response;
      this.addForm.setValue({
        title: this.article.title,
        body: this.article.body
      });
    }, error => {
      console.log(error);
    })
  }

  formOnSubmit(form){
    if(this.loadToggle) {
      this.apiHandler.addArticles(form.value).subscribe(response => {
      }, error => {
        console.log(error);
      })
    } else {
        this.apiHandler.createArticle(this.id, form.value).subscribe(response => {
        this.article = response;
      }, error => {
        console.log(error);
      })
    }
    this.route.navigate(["/blog"]);
  }
}
