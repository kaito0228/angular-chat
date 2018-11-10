import { Component } from '@angular/core';
import { Comment } from './class/comment';

const COMMENTS: Comment[] = [
  { name: '武井検事', message: 'お疲れ様です。' },
  { name: '武井検事', message: 'この間のどうなりましたか？' },
  { name: '五十嵐さん', message: 'お疲れ様です。' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
}
