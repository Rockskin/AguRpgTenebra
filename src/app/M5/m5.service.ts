import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class M5Service {

  glosseryOfTheDamneds = [];

  private readonly REST_API_SERVER  = 'http://localhost:51024/api';

  constructor(private http: HttpClient) {

  }

  public getGlossery(){
    return this.http.get(`${this.REST_API_SERVER}/GlosseryOfTheDamneds/`);
  }
}
