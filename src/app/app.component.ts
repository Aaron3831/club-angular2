import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullImagePath: string;

  constructor() {
    this.fullImagePath = 'assets/images/shibuyanights.jpg'
  }

  ngOnInit() {
  }

}
