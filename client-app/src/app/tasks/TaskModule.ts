import { NgModule } from '@angular/core';
import { TaskComponent } from './TaskComponent';
import { CommonModule } from '@angular/common';
import { CommonMaterialModules } from '../common/material/CommonMaterialModules';
import { FormsModule } from '@angular/forms';
import { TaskResource } from './services/TaskResource';
import { TaskService } from './services/TaskService';
import { TaskRoutingModule } from './TaskRoutingModule';
import { TaskDetailsComponent } from './task-detail/TaskDetailsComponent';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModules,
        FormsModule,
        TaskRoutingModule,
    ],
    exports: [],
    declarations: [
        TaskComponent,
        TaskDetailsComponent,
    ],
    providers: [
        TaskResource,
        TaskService,
    ],
})
export class TaskModule { }
