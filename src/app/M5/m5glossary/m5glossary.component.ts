import { Component, OnInit } from '@angular/core';
import { M5Service } from '../m5.service';

@Component({
  selector: 'app-m5glossary',
  templateUrl: './m5glossary.component.html',
  styleUrls: ['./m5glossary.component.scss']
})
export class M5glossaryComponent implements OnInit {

  glosserys: any;
  constructor(private m5Service: M5Service) { }

  ngOnInit(): void {
    this.m5Service.getGlossery().subscribe(data => {
      this.glosserys = data;
    });
  }
}
