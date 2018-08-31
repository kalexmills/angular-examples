import { Component, OnInit } from '@angular/core';
import {EventBusService, Message} from '../event-bus.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html'
})
export class SenderComponent implements OnInit {

  value: string;

  constructor(public ebs: EventBusService) { }

  ngOnInit() { }

  public sendMessage(msg: string) {
    this.ebs.send(new Message(msg));
  }

}
