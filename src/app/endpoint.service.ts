/**
 * Created by JulienSere on 25/12/2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class EndpointService {

  private url:string = 'http://localhost:8080/supervision/info';

  constructor (private http: Http) {}

  public getEndpoint(): Observable<any> {
    return this.http.get(this.url);
  }

  public getData(): Observable<Response> {
    return this.http.get(this.url);
  }

  public getUrl(): string {
    return this.url;
  }

}
