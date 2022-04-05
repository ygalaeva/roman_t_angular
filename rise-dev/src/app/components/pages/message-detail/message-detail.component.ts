import { Message } from '../../../interfaces/message';
import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {

  constructor(private messageService: MessageService, private route: ActivatedRoute, private location: Location) {
    this.route.params.subscribe(params => this.messageId = params.messageId);
  }

  message$: Observable<Message> = null;
  messageId: string = null;

  getMessage() {
    this.message$ = this.messageService.getMsgDetail(this.messageId).pipe(
      map((messageItem) => {
        return { ...messageItem } as Message;
      })
    );
  }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.getMessage()
  }
}
