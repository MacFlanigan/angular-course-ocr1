import {Component} from '@angular/core';

interface Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'In hac habitasse platea dictumst. Aenean rutrum porta ipsum, et consequat metus efficitur vitae. ' +
        'Sed vitae imperdiet lacus. Nam leo justo, faucibus in tristique quis, euismod at augue.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Proin arcu lectus, accumsan vel eleifend quis, venenatis nec massa. Donec mattis faucibus mauris, ' +
        'ut tincidunt lacus feugiat a. Sed in diam lacinia, fermentum nibh vel, rhoncus metus.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Curabitur eleifend quis lorem ut efficitur. Fusce pretium varius leo ac ornare. ' +
        'Proin consectetur sapien et euismod suscipit. Maecenas pretium tellus et lacinia finibus.',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
