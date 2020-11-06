import { NgModule } from '@angular/core';
import { UserComponent } from './UserComponents';
import { CommonModule } from '@angular/common';
import { CommonMaterialModules } from '../common/material/CommonMaterialModules';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModules,
    ],
    exports: [],
    declarations: [
        UserComponent,
    ],
    providers: [],
})
export class UserModule { }
