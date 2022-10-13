import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  date = new Date();
  showModal: boolean = false;
  getGreetMsg() {
    let hour: number = parseInt(new Date().toTimeString().slice(0, 2));
    return hour > 17 ? "Good Evening" : hour > 12 ? "Good Afternoon" : "Good Morning";
  }
  taskCount: any = {
    completedTask: 0,
    totalTask: 0
  };

  updateCount(taskCount: any) {
    console.log(taskCount)
    this.taskCount = taskCount;
  }
  greetMsg: string = this.getGreetMsg();

  constructor() {
  }
  ngOnInit(): void {
  }

}
