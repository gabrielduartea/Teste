import {Component, OnInit } from '@angular/core';
import { CreateTaskDto } from './dataModel/CreateTaskDto';
import { TaskService } from './services/TaskService';
import { NgForm } from '@angular/forms';
import { TaskDto } from './dataModel/TaskDto';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { MatSnackBar, MatDialog } from '@angular/material';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tasks',
    templateUrl: 'tasks.html'
})

export class TaskComponent implements OnInit {
    public taskModel: CreateTaskDto = {} as CreateTaskDto;
    public isLoading = false;
    public displayedColumns: string[] = ['title', 'actions'];
    private taskListSubject: BehaviorSubject<TaskDto[]> = new BehaviorSubject(null);
    constructor(private taskService: TaskService, private matDialog: MatDialog,
                private snackBar: MatSnackBar, private route: Router) {
    }

    ngOnInit() {
        this.isLoading = true;
        this.taskService.getAllTasksItems()
            .pipe (finalize ( () => this.isLoading = false ))
            .subscribe((tasksItems) => this.taskListSubject.next(tasksItems));
    }

    public getTasks(): Observable<TaskDto[]> {
        return this.taskListSubject.asObservable();
    }

    public submit(form: NgForm) {
        if (form.valid) {
            this.taskService.createTask(this.taskModel)
            .subscribe((newTask: TaskDto) => {
                if (newTask) {
                    const list = this.taskListSubject.getValue();
                    list.push(newTask);
                    this.taskListSubject.next(_.cloneDeep(list));
                    this.snackBar.open('The Task has been created!', null, {
                        duration: 3000,
                    });
                }
                form.reset();
            });
        }
    }

    public taskDetails(taskId: number) {
        this.route.navigate(['/task-details', taskId]);
    }

}

