import { Injectable } from '@angular/core';
import { Task } from './models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task: Task[];

  constructor() {
    this.task = [{
      title: 'hello title 1',
      description: 'hello description 1',
      priority: 2,
      date: new Date,
    }, {
      title: 'hello title 1',
      description: 'hello description 1',
      priority: 2,
      date: new Date,
    }, {
      title: 'hello title 1',
      description: 'hello description 1',
      priority: 2,
      date: new Date,
    }];
  }

  addTask = (taskItem: Task) => {
    this.task.push(taskItem);
  }

  // getTask(){
  //   return of 
  // }


}
