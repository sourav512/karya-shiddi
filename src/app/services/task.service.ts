import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private url: string = "https://localhost:7068/api/"
  constructor(private http: HttpClient) { }

  getTask() {
    return this.http.get(this.url + "task");
  }

  updateTaskStatus(id: string) {
    return this.http.get(this.url + "task/complete/" + id)
  }

  postTask(task: Task) {
    console.log(this.url + "task", task);
    return this.http.post(this.url + "task", task)
  }
}
