import { Component, OnInit } from '@angular/core';
import { GlosseryOfTheDamned } from '../m5.model';
import { M5Service } from '../m5.service';






@Component({
  selector: 'app-m5glossary',
  templateUrl: './m5glossary.component.html',
  styleUrls: ['./m5glossary.component.scss']
})
export class M5glossaryComponent implements OnInit {

  list: GlosseryOfTheDamned[]
  constructor(private m5Service: M5Service) { }

  ngOnInit(): void {
    this.m5Service.getGlossery().then(
      (data) => {
        this.list.push(data as GlosseryOfTheDamned);
        console.log(data);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )
  }


}
