import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-activated-route',
  templateUrl: './activated-route.component.html',
})
export class ActivatedRouteComponent implements OnInit {
  constructor(public activeRoute: ActivatedRoute) {
  }
  ngOnInit() {}
}
