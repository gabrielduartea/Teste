import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfig } from '../../common/api/ApiConfig';
import { TaskDto } from '../dataModel/TaskDto';
import { CreateTaskDto } from '../dataModel/CreateTaskDto';

@Injectable()
export class TaskResource {
    private readonly URL = ApiConfig.url + '/tasks';

    constructor(private httpClient: HttpClient) {
    }

    public findAll(): Observable<TaskDto[]> {
        return this.httpClient.get(this.URL) as Observable<TaskDto[]>;
    }

    public findTaskById(taskId: number): Observable<TaskDto> {
        return this.httpClient.get(this.URL + '/' + taskId) as Observable<TaskDto>;
    }

    public create(createTaskDto: CreateTaskDto): Observable<TaskDto> {
        return this.httpClient.post(this.URL, createTaskDto) as Observable<TaskDto>;
    }

}
