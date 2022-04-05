import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bgClass;

  constructor(private router: Router) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {

          const eventUrl = /\d+|^\s+|\s+$/g.exec(event.urlAfterRedirects);;
          const currentRoute = (eventUrl || []).join('');
          if (eventUrl !== null) {
            this.bgClass = eventUrl.input.replace(/\d+|^\s+|\s+$/g, '').replace("/", '').replace("/", '');
          }
          if (event.urlAfterRedirects != '/') {
            this.bgClass = 'dark';
          }
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
