import { Injectable } from '@angular/core';
import { GlosseryOfTheDamned } from './m5.model';
import { HttpClient } from "@angular/common/http";
import { title } from 'process';


@Injectable({
  providedIn: 'root'
})
export class M5Service {

  readonly rootURL = 'http://localhost:51024/api';
  glosseryOfTheDamneds:[];
  constructor(private http: HttpClient) {
  }

  ngOnInit(
  ){
    this.fetchGlossery();
  }

  getGlossery(){
    return new Promise(
      (resolve, reject) => {
        if(this.glosseryOfTheDamneds && this.glosseryOfTheDamneds.length > 0){
          resolve(this.glosseryOfTheDamneds)
        }else{
          const error = new Error('GlosseryOfTheDamneds does not exist or is empty');

          reject(error);

        }
      }
    )
  }



  private fetchGlossery() {
    this.http.get(`${this.rootURL}/GlosseryOfTheDamneds/`)
    .subscribe(
      (result) => { return result}
    );

  }


}
