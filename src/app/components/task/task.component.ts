import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() item!: Task;
  @Output() updateTaskData = new EventEmitter<any>();

  constructor(private taskService: TaskService) {

  }

  markTaskAsComplete() {
    this.taskService.updateTaskStatus(this.item.id).subscribe(
      data => {
        this.updateTaskData.emit()
      }
    );
  }


  priorityIcons: { [key: string]: string } = {
    "1": "down",
    "2": "right",
    "3": "up",
  }
  ngOnInit(): void {


  }

}
