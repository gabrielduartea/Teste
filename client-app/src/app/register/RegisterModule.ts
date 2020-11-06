import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonMaterialModules } from '../common/material/CommonMaterialModules';
import { RegisterComponent } from './RegisterComponent';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModules,
        FormsModule,
    ],
    exports: [],
    declarations: [
        RegisterComponent,
    ],
    providers: [],
})
export class RegisterModule {
}
