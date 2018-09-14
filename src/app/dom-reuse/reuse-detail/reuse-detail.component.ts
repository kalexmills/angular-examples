import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, UrlSegment} from '@angular/router';

@Component({
  selector: 'app-reuse-detail',
  templateUrl: './reuse-detail.component.html',
})
export class ReuseDetailComponent implements OnInit {

  url: string;

  constructor(private ar: ActivatedRoute) { }

  ngOnInit() {
    this.ar.url.subscribe((url: UrlSegment[]) => {
      this.url = url.toString();
    });
  }
}
