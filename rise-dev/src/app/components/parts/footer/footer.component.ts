import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  bgClass:string = null;

  constructor(private router: Router) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          const eventUrl = /\d+|^\s+|\s+$/g.exec(event.urlAfterRedirects);;
          const currentRoute = (eventUrl || []).join('');
          if (eventUrl !== null) {
            this.bgClass = eventUrl.input.replace(/\d+|^\s+|\s+$/g, '').replace("/", '').replace("/", '');
          }
          if (event.urlAfterRedirects === '/admin/auth') {
            this.bgClass = 'project';
          } else {
            this.bgClass = null;
          }
        }
      }
    )
  }

  ngOnInit() {

  }

}
