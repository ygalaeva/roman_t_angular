import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isAuth) {
    } else {
      this.router.navigateByUrl('/admin/auth');
    }
  }

}
