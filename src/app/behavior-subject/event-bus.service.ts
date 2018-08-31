import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  bs: BehaviorSubject<Message> = new BehaviorSubject<Message>(new Message('No messages yet :-('));
  constructor() {}

  public send(msg: Message) {
    this.bs.next(msg);
  }

  public subscribe(): Observable<Message> {
    return this.bs.asObservable();
  }
}


export class Message {
  msg: string;
  constructor(msg: string) {
    this.msg = msg;
  }
}
