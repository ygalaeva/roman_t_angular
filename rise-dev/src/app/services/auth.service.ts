import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth: boolean = true;

  constructor(private firestore: AngularFirestore) { }

  getAuth() {
    return this.firestore.collection('user').doc('userid').get();
  }

  getAccess(isSuccess: boolean) {
    this.isAuth = true;
  }
}
