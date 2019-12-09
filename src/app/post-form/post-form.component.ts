import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()

  name: string =''
  lastName: string = ''
  numberPhone: string = ''
  id: number = 2
  constructor() { }

  ngOnInit() {
  }

  addPost() {
    console.log("add post")
    if(this.name.trim() && this.lastName.trim()){
      const post: Post = {
        name: this.name,
        lastName: this.lastName,
        numberPhone: this.numberPhone,
        id: this.id++
      }
      this.onAdd.emit(post)
      console.log('New Post', post)
      this.name = this.lastName = this.numberPhone =''
    }
  }
}
