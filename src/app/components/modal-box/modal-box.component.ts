import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.scss']
})
export class ModalBoxComponent implements OnInit {
  @Output() toggleShowModal = new EventEmitter<boolean>;
  constructor() {
  }
  dateString?: any;
  taskDate: Date = new Date(this.dateString);
  task: Task = {
    title: "",
    description: "",
    date: new Date(),
    priority: 0,
    isCompleted: false
  };

  logData() {
    console.log(new Date(this.task.date));
    console.log(new Date(this.dateString));
    console.log(this.taskDate);
    console.log(this.dateString);
    console.log(this.task);


  }

  taskTitle: string = "";
  taskDescription: string = "";
  taskPriority: number = -1;
  changeModalView() {
    this.toggleShowModal.emit()
  }
  // console.log();

  ngOnInit(): void {
  }

}
