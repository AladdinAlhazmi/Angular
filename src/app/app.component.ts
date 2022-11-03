import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example-app';
  entreValues = '';

  onAddPost(postInput: HTMLTextAreaElement) {
    console.log(postInput);
    this.title = postInput.value;
  }
}
