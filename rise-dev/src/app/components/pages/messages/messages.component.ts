import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message';
import { MessageService } from 'src/app/services/message.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {
  messages$: Observable<Message[]> = null;

  constructor(private messageService: MessageService, private router: Router, private location: Location) { }

  getMessages() {
    this.messages$ = this.messageService.getMessages().pipe(
      map(messageArr => {
        if (messageArr.length != 0) {
          return messageArr.map(messageItem => {
            return {
              id: messageItem.payload.doc.id,
              ...messageItem.payload.doc.data()
            } as Message;
          })
        } else {
          return this.messages$ = null;
        }
      })
    )
  }

  deleteMessage(id: string) {
    this.messageService.deleteMessage(id);
  }

  goBack() {
    this.location.back()
  }

  ngOnInit(): void {
    this.getMessages();
  }

}
