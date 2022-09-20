import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  date = new Date();
  showModal: boolean = false;
  // if (this.hour < 12) {
  //   this.greetMsg
  // }
  greetMsg: string = '';
  hour: number = parseInt(new Date().toTimeString().slice(0, 2));
  constructor() {
    if (this.hour > 17) {
      this.greetMsg = "Good Evening"
    } else if (this.hour > 12) {
      this.greetMsg = "Good Afternoon"
    } else {
      this.greetMsg = "Good Morning"
    }
  }
  task = [{ title: 'hello how are you', description: "this is a description", priority: 3 }];
  ngOnInit(): void {
  }

}
