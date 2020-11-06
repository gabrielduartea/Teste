import {Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from '../services/TaskService';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { TaskDto } from '../dataModel/TaskDto';

@Component({
    selector: 'app-task-details',
    templateUrl: 'task-details.html'
})

export class TaskDetailsComponent implements OnInit {
    public taskId: number;
    public isLoading = false;
    private taskSubject: BehaviorSubject<TaskDto> = new BehaviorSubject(null);
    constructor(private route: ActivatedRoute, private taskService: TaskService) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.taskId = params.id;
        });
        this.isLoading = true;
        this.taskService.getTaskById(this.taskId)
                .pipe (finalize ( () => this.isLoading = false ))
                .subscribe((task) => this.taskSubject.next(task));
    }

    public getTask(): Observable<TaskDto> {
        return this.taskSubject.asObservable();
    }
}


