import { Component } from '@angular/core';

export interface Post {
  name: string
  lastName: string
  numberPhone: string
  id?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      posts: Post[] = [
        { name: 'Al',
          lastName: 'zel',
          numberPhone: '375296306485'
        }
      ]

  updatePosts(post:Post) {
    this.posts.unshift(post)
  }
}
