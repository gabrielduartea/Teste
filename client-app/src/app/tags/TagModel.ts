import { NgModule } from '@angular/core';
import { CommonMaterialModules } from '../common/material/CommonMaterialModules';
import { CommonModule } from '@angular/common';
import { TagComponent } from './TagComponent';
import { TagService } from './services/TagService';
import { TagResource } from './services/TagResource';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateTagDialogComponent } from './dialogs/createTagDialogComponent';
import { ConfirmationTagDialogDeleteComponent } from './dialogs/ConfirmationTagDialogDeleteComponent';

@NgModule({
    imports: [
        CommonMaterialModules,
        CommonModule,
        HttpClientModule,
        FormsModule,
    ],
    exports: [
        TagComponent,
    ],
    declarations: [
        TagComponent,
        CreateTagDialogComponent,
        ConfirmationTagDialogDeleteComponent,
    ],
    entryComponents: [
        CreateTagDialogComponent,
        ConfirmationTagDialogDeleteComponent,
    ],
    providers: [
        TagService,
        TagResource,
    ],
})
export class TagModule {

}
