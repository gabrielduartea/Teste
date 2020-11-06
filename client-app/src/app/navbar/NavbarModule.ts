import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonMaterialModules } from '../common/material/CommonMaterialModules';
import { NavbarComponent } from './NavbarComponent';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModules,
        AppRoutingModule,
    ],
    exports: [
        NavbarComponent,
    ],
    declarations: [
        NavbarComponent,
    ],
    providers: [],
})
export class NavbarModule {
}
