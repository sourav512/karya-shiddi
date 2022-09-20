import { Component, OnInit, Input } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  // @Input() item: Task = { title: "", description: "", date: new Date(), priority: 1 };
  @Input() item: Task = { title: "", description: "", date: new Date(), priority: 1, isCompleted: true };
  // @Input() item: Task = {};

  // date = this.item.date;
  constructor() {
  }


  priorityIcon: string[] = ['down', 'right', 'up'];
  ngOnInit(): void {
  }

}
