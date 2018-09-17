import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linkGroups = [
    {
      groupName: 'Routing',
      links: [
        {
          link: 'router-example',
          title: 'Router Example'
        },
        {
          link: 'feature-module',
          title: 'Feature Module'
        },
        {
          link: 'dom-reuse',
          title: 'DOM Reuse'
        },
        {
          link: 'router-guards',
          title: 'Router Guards'
        }
      ]
    },
    {
      groupName: 'RxJS',
      links: [
        {
          link: 'behavior-subject',
          title: 'BehaviorSubject Usage',
        },
        {
          link: 'typeahead',
          title: 'Type-ahead Suggestions'
        }
      ]
    }
  ];

  loading = true;

  constructor(private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.loading = false;
    }
  }
}
