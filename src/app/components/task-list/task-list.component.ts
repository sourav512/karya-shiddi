import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Output() toggleShowModal = new EventEmitter<boolean>;
  constructor() { }
  @Input() heading: any;
  ngOnInit(): void {
  }
  taskList: Task[] = [{
    title: 'Complete budgeting for FY 2023',
    description: 'Budgeting for FY 2023. This is required by the Finance department. A further longer description Is possible',
    priority: 2,
    date: new Date(),
    isCompleted: false
  }, {
    title: 'Complete budgeting for FY 2023',
    description: 'Budgeting for FY 2023. This is required by the Finance department. A further longer description Is possible.  This is required by the Finance department. A further longer description Is possible',
    priority: 1,
    date: new Date(),
    isCompleted: true
  }, {
    title: 'this is a title text',
    description: 'Budgeting for FY 2023.   ',
    priority: 3,
    date: new Date(),
    isCompleted: false
  }];



  changeModalView() {
    this.toggleShowModal.emit()
  }

}
