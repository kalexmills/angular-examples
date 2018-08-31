import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html'
})
export class BehaviorSubjectComponent implements OnInit {

  public toEmit: string;
  public observedFromSubscription: string;

  public subscription: Subscription;

  bs: BehaviorSubject<string> = new BehaviorSubject<string>('Initial Value');

  observable: Observable<string> = this.bs.asObservable();

  constructor() {}

  public asObservable(): Observable<string> {
    return this.bs.asObservable();
  }

  public onEmit() {
    console.log('Emitting:', this.toEmit);
    this.bs.next(this.toEmit);
  }

  public subscribe() {
    this.subscription = this.bs.subscribe((next) => {
      this.observedFromSubscription = next;
    });
  }

  public unsubscribe() {
    if (this.subscription != null) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

  ngOnInit() { }
}
