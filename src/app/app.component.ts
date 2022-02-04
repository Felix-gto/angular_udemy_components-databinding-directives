import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Declare Server element object: create an Test server example
  serverElements = [{type: 'server', name: 'Test server', content: 'Just a test!'}];
}
