import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reuse-list',
  templateUrl: './reuse-list.component.html',
})
export class ReuseListComponent implements OnInit {
  public items = [
    { link: '1', contents: 'Item 1' },
    { link: '2', contents: 'Item 2' },
    { link: '3', contents: 'Item 3' },
    { link: '4', contents: 'Item 4' },
    { link: '5', contents: 'Item 5' },
    { link: '6', contents: 'Item 6' },
  ];

  constructor() { }

  ngOnInit() { }
}
