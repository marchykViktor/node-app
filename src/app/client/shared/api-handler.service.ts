import { Injectable } from '@angular/core';
import { Article } from "../index";
import { Observable } from "rxjs";
import { ApiService } from './api.service';


@Injectable()
export class ApiHandlerService {

  constructor(private api: ApiService) { }

  getArticles(){
    let endPoint = '/api/articles';
    return this.api.get(endPoint).map(res => res.json() as Article[]).catch(err => Observable.throw(err));
  }

  getArticle( id: string ){
    let endPoint = '/api/articles/' + id;
    return this.api.get(endPoint).map(res => res.json() as Article[]).catch(err => Observable.throw(err));
  }

  addArticles( article: {} ){
    let endPoint = '/api/articles';
    return this.api.add(endPoint, article).map(res => res.json() as Article[]).catch(err => Observable.throw(err));
  }

  createArticle( id: string, article: {} ){
    let endPoint = '/api/articles/' + id;
    return this.api.create(endPoint, article).map(res => res.json() as Article[]).catch(err => Observable.throw(err));
  }

}
