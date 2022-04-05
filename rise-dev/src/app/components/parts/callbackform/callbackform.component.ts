import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Message } from '../../../interfaces/message';
import { MessageService } from 'src/app/services/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-callbackform',
  templateUrl: './callbackform.component.html',
  styleUrls: ['./callbackform.component.scss']
})

export class CallbackformComponent implements OnInit {
  message: Message = null;
  // errAllert: string = null;
  allert: string = null;
  isErr: boolean = false;

  constructor(private messageService: MessageService) { }

  validateData(form: NgForm) {
    let messageItem: Message = form.value;
    let messageCounter: number = 0;
    for (let messageField in messageItem) {
      if (messageItem[messageField].length < 3) {
        this.isErr = true;
        this.allert = 'Введите корректные данные!';
        break;
      } else {
        messageCounter++;
        if (messageCounter === Object.keys(messageItem).length) {
          this.message = { ...messageItem as Message };
          this.sendData(this.message);
          this.isErr = false;
          form.reset();
        }
      }
    }

  }

  sendData(message: Message) {
    console.log(message);
    // Generate current data
    let currentDate = date => date.toISOString().slice(0, 10);
    currentDate = currentDate(new Date());

    let userMessage: Message = { date: currentDate, ...message };

    // this.msgText = { date: currentDate, ...form.value }

    this.messageService.addMsg(userMessage)
      .then(val => {
        if (val) {
          this.allert = "Ваше сообщение доставлено!";
        }
      })
      .catch(err => console.error(err));
  }


  ngOnInit(): void {
  }

}
