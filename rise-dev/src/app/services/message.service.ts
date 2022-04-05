import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(private firestore: AngularFirestore) { }

  dbCollection = this.firestore.collection<Message>('messages');

  addMsg(msg: Message) {
    let isValid: boolean = true;
    for (var prop in msg) {
      if (msg[prop].length === 0) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      return this.dbCollection.add(msg);
    }
  }

  getMessages() {
    return this.dbCollection.snapshotChanges();
  }

  getMsgDetail(id: string) {
    return this.dbCollection.doc(id).valueChanges();
  }

  deleteMessage(id: string) {
    return this.dbCollection.doc(id).delete();
  }
}
