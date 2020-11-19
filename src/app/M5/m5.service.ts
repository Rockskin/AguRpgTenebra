import { Injectable } from '@angular/core';
import { GlosseryOfTheDamned } from './m5.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class M5Service {

  readonly rootURL = 'http://localhost:51024/api';
  glosseryOfTheDamneds;
  constructor(private http: HttpClient) {

  }

  public getGlossery(): Observable<any> {
    return this.http.get<any>(`${this.rootURL}/GlosseryOfTheDamneds/`);
  }
}
