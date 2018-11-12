import { User } from './class/user';
import { Component } from '@angular/core';
import { Comment } from './class/comment';

const CURRENT_USER: User = new User(1, '五十嵐 洋平');
const ANOTHER_USER: User = new User(2, '竹井 賢治');

const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, 'お疲れ様です'),
  new Comment(ANOTHER_USER, 'この件どうなりましたか。'),
  new Comment(CURRENT_USER, 'お疲れ様です'),
  new Comment(CURRENT_USER, 'クライアントからOK出ました。')
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
  currentUser = CURRENT_USER;
}
