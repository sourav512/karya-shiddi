import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  // @Output() toggleShowModal = new EventEmitter<boolean>;
  @Output() taskCount = new EventEmitter<any>;
  showModal: boolean = false;
  @Input() heading: any;
  @Input() subHeading!: string;


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getData()
  }

  taskList: any;
  inCompleteAndCompleteTask = {}

  getData() {
    this.taskService.getTask().subscribe((task) => {
      this.taskList = task;
      this.inCompleteAndCompleteTask = {
        totalTask: this.taskList.length,
        completedTask: this.taskList.filter((singleTask: Task) => singleTask.isCompleted == true).length
      }
      this.taskCount.emit(this.inCompleteAndCompleteTask);
    })
  }

}
