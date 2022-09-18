import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {
  ITask,
  IStatusPercentage,
  StatusEnums
} from '../interface/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private httpclient: HttpClient) {}

  getTaskList(): Observable<Array<ITask>> {
    return this.httpclient
      .get('http://localhost:8080/api/v1/task/find/all')
      .pipe(map((d: Array<ITask>) => d));
  }
  postTaskList(task: ITask): Observable<ITask> {
    return this.httpclient
      .post('http://localhost:8080/api/v1/task/add', task)
      .pipe(map((d: ITask) => d));
  }

  updateTask(task: ITask, id: string): Observable<ITask> {
    return this.httpclient
      .put(`http://localhost:8080/api/v1/task/update/${id}`, task)
      .pipe(map((d: ITask) => d));
  }
  deleteTask(id: string) {
    return this.httpclient.delete(`http://localhost:8080/api/v1/task/delete/${id}`);
  }

  getTaskById(id: string): Observable<ITask> {
    return this.httpclient
      .get(`http://localhost:8080/api/v1/task/find/${id}`)
      .pipe(map((d: ITask) => d));
  }

  getStatusPercentage(): Observable<Array<IStatusPercentage>> {
    return this.httpclient
      .get(`http://localhost:8080/api/v1/task/status/percentage`)
      .pipe(map((d: Array<IStatusPercentage>) => d));
  }

  getStatusOptions(): string[] {
    return Object.values(StatusEnums).filter(value => typeof value === 'string');
  }
}
