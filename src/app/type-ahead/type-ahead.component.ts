import {AfterViewInit, Component, OnDestroy, ViewChild} from '@angular/core';
import {fromEvent, of, Subscription, zip} from 'rxjs';
import {debounceTime, defaultIfEmpty, distinctUntilChanged, filter, map, repeat} from 'rxjs/operators';

@Component({
  selector: 'app-type-ahead',
  templateUrl: './type-ahead.component.html',
})
export class TypeAheadComponent implements OnDestroy, AfterViewInit {

  @ViewChild('searchBox') private searchBox;

  private options: Array<string> = [
    'Apple',
    'Apricot',
    'Asparagus',
    'Aubergines',
    'Avocado',
    'Banana',
    'Cucumber',
    'Cabbage',
    'Corn',
    'Endive',
    'Grapes',
    'Green Beans',
    'Kiwi',
  ];

  public filteredOptions: Array<string> = this.options;

  private typeahead: Subscription;

  constructor() { }

  ngAfterViewInit() {
    this.typeahead = zip(
      fromEvent(this.searchBox.nativeElement, 'input').pipe(
        map((e: KeyboardEvent) => e.srcElement.textContent),
        filter( text => text.length >= 1),
        debounceTime(50),
        distinctUntilChanged()
      ),
      of(this.options).pipe(
        repeat()
      )
    ).pipe(
      map(([prefix, options]) => {
        console.log(prefix, options);
        return options.filter((val: string) => {
          return val.startsWith(prefix);
        });
      })
    ).pipe(
      defaultIfEmpty(this.options)
    ).subscribe((filteredOptions) => {
      this.filteredOptions = filteredOptions;
    });
  }

  ngOnDestroy() {
    this.typeahead.unsubscribe();
  }

}
