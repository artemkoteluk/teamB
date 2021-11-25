import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  MessageForm;
  cconsole = console;
  users = [
    { name: 'Dolores Rojas', status: 'ad duis ex', avatar: 'https://fury.visurel.com/assets/img/avatars/20.jpg', messages: [
      { message: 'Hey David! How\'s it going?', mine: false },
      { message: 'You wanted to go golfing you remember? What about this weekend?', mine: false },
      { message: 'Hey! I\'m good.Sure, let\'s meet on Saturday at the golf club, okay?', mine: true },
      { message: 'Sure thing! I hope we can finally beat our record this time. :)', mine: false },
      { message: 'Awesome! We surely will. ;)', mine: true },
      { message: 'See you on Saturday!', mine: true },
    ] },
    { name: 'Lila Wade', status: 'in nostrud anim', avatar: 'https://fury.visurel.com/assets/img/avatars/16.jpg', messages: [
      { message: 'Hi', mine: false },
      { message: 'Hello', mine: true },
    ] },
    { name: 'Lawrence Larson', status: 'commodo deserunt enim', avatar: 'https://fury.visurel.com/assets/img/avatars/13.jpg', messages: [] },
    { name: 'Frieda Robbins', status: 'officia excepteur elit', avatar: 'https://fury.visurel.com/assets/img/avatars/4.jpg', messages: [] },
    { name: 'Helene Curtis', status: 'enim aute dolore', avatar: 'https://fury.visurel.com/assets/img/avatars/10.jpg', messages: [] },
    { name: 'Lorena Aguirre', status: 'consectetur dolor ea', avatar: 'https://fury.visurel.com/assets/img/avatars/15.jpg', messages: [] },
    { name: 'Toni Knapp', status: 'consectetur id tempor', avatar: 'https://fury.visurel.com/assets/img/avatars/19.jpg', messages: [] },
    { name: 'Therese Alvarez', status: 'sunt duis dolor', avatar: 'https://fury.visurel.com/assets/img/avatars/10.jpg', messages: [] },
    { name: 'Roseann Dejesus', status: 'et duis ex', avatar: 'https://fury.visurel.com/assets/img/avatars/3.jpg', messages: [] },
    { name: 'Ayala Martinez', status: 'velit reprehenderit in', avatar: 'https://fury.visurel.com/assets/img/avatars/18.jpg', messages: [] },
    { name: 'Donovan Vega', status: 'eiusmod aute et', avatar: 'https://fury.visurel.com/assets/img/avatars/20.jpg', messages: [] },
  ]

  myAvatar = 'https://fury.visurel.com/assets/img/avatars/1.jpg';
  currentConversation = this.users[0];

  constructor(private formBuilder: FormBuilder) {
    this.MessageForm = this.formBuilder.group({
      message: ['', [Validators.nullValidator]],
    });
  }

  sendClick(): void {
    if (this.MessageForm.value.message.trim() !== '') {
      this.currentConversation.messages.push({
        message: (this.MessageForm.value.message.trim()),
        mine: true
      });
      (this.MessageForm.get('message') ?? { setValue: _ => _ }).setValue('');
    }
  }

  ngOnInit(): void {
  }

}
