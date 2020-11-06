import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { CreateTaskDto } from '../dataModel/CreateTaskDto';
import { TaskDto } from '../dataModel/TaskDto';
import { TaskResource } from './TaskResource';

@Injectable()
export class TaskService {
    constructor(private taskResource: TaskResource) {
    }

    public getAllTasksItems(): Observable<TaskDto[]> {
        return this.taskResource.findAll();
    }

    public getTaskById(taskId: number): Observable<TaskDto> {
        return this.taskResource.findTaskById(taskId);
    }

    public createTask(createTaskDto: CreateTaskDto): Observable<TaskDto> {
        return this.taskResource.create(createTaskDto);
    }

}
