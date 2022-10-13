import { Component, Input, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-modal-box',
  templateUrl: './modal-box.component.html',
  styleUrls: ['./modal-box.component.scss']
})
export class ModalBoxComponent implements OnInit {
  @Output() updateTask = new EventEmitter<any>;
  @Output() toggleModal = new EventEmitter<any>();
  constructor(private taskService: TaskService) {
  }

  hideModal() {
    this.toggleModal.emit();
  }

  dateString?: any;
  taskDate: Date = new Date(this.dateString);
  task: Task = {
    "title": "",
    "description": "",
    "date": "",
    "priority": 0,
    "isCompleted": false,
    "id": ""
  };


  // console.log();
  createTask() {
    this.task.priority = parseInt(this.task.priority.toString());
    this.taskService.postTask(this.task).subscribe((data) => {
      console.log(data);
      this.updateTask.emit()
      this.toggleModal.emit()
    });
  }

  ngOnInit(): void {
  }

}
