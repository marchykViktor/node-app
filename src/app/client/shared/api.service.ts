import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  url: string = "http://localhost:7878";

  // Общаемся с сервером
  get(endPoint: string): Observable<Response> {
    return this.http.get(this.createUrl(endPoint));
  }

  add(endPoint: string, article: {}): Observable<Response> {
    return this.http.post(this.createUrl(endPoint), article);
  }

  create(endPoint: string, article: {}): Observable<Response> {
    return this.http.put(this.createUrl(endPoint), article);
  }

  // Приводим ссылку к нужному виду
  private createUrl(endPoint): string {

    let url = this.url + endPoint;
    if (!endPoint.startsWith('/')) {
        url = this.url + '/' + endPoint;
    }

    return url;
  }

}
