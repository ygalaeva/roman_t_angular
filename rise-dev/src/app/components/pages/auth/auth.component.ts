import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  public errMsg: string;
  private rootUser: User = null;

  constructor(public router: Router, private authService: AuthService) { }

  auth(form: NgForm) {
    let formUser: User = form.value;
    if (form.valid) {
      if (formUser.username === this.rootUser.username && formUser.password === this.rootUser.password) {
        this.authService.getAccess(this.rootUser.success);
        this.router.navigateByUrl('/admin/main-page/project');
      } else {
        this.errMsg = 'Неверный логин или пароль';
      }
    } else {
      this.errMsg = 'Введите корректные данные';
    }
  }

  getRoot() {
    this.authService.getAuth().subscribe(
      data => {
        this.rootUser = data.data() as User;
      }
    )
  }

  ngOnInit(): void {
    this.getRoot();
  }

}
