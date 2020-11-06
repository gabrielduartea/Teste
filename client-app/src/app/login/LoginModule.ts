import { NgModule } from '@angular/core';
import { LoginComponent } from './LoginComponent';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonMaterialModules } from '../common/material/CommonMaterialModules';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModules,
        FormsModule,
    ],
    exports: [],
    declarations: [
        LoginComponent,
    ],
})
export class LoginModule {
}
