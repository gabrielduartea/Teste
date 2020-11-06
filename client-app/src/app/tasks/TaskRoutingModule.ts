import { Route, RouterModule } from '@angular/router';
import { TaskDetailsComponent } from './task-detail/TaskDetailsComponent';
import { TaskComponent } from './TaskComponent';
import { NgModule } from '@angular/core';

export const TaskRoutes: Route[] = [
    {path: 'tasks', component: TaskComponent},
    {path: 'task-details/:id', component: TaskDetailsComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(TaskRoutes),
    ],
    exports: [
        RouterModule
    ]
  })
  export class TaskRoutingModule { }

