import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {users} from "./chatdata";
import {ChatInterface} from "./chatinterface";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public MessageForm: FormGroup;
  public users: ChatInterface[] = users

  public myAvatar: string = 'https://fury.visurel.com/assets/img/avatars/1.jpg';
  public currentConversation = this.users[0];

  constructor(private formBuilder: FormBuilder) {
    this.MessageForm = this.messageFormCreate();
  }

  ngOnInit(): void {
  }

  private messageFormCreate(): FormGroup {
    return this.formBuilder.group({
      message: ['', [Validators.nullValidator]],
    });
  }

  public sendClick(): void {
    if (this.MessageForm.value.message.trim() !== '') {
      this.currentConversation.messages.push({
        message: (this.MessageForm.value.message.trim()),
        mine: true
      });
      (this.MessageForm.get('message') ?? {setValue: _ => _}).setValue('');
    }
  }
}
