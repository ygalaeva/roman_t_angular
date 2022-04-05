import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  bgClass;
  isMenu: boolean = false;
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
  menu() {
    this.isMenu = !this.isMenu;
  }


  ngOnInit(): void {
  }

}
