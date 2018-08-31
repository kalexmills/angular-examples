import { Component, OnInit } from '@angular/core';
import {EventBusService} from '../event-bus.service';

@Component({
  selector: 'app-listener',
  templateUrl: './listener.component.html',
})
export class ListenerComponent implements OnInit {

  constructor(public eb: EventBusService) {}

  ngOnInit() {}
}
