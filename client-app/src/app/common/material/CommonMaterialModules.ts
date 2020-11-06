import { NgModule } from '@angular/core';
import { MatCardModule, MatTableModule, MatProgressBarModule, MatIconModule, MatButtonModule,
    MatTooltipModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatSnackBarModule,
    MatPaginatorModule, MatSelectModule, MatGridListModule, MatListModule, MatBadgeModule, MatToolbarModule } from '@angular/material';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatToolbarModule,
        MatTableModule,
        MatBadgeModule,
        MatListModule,
        MatGridListModule,
        MatProgressBarModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatSelectModule,
        MatPaginatorModule,
        MatListModule,
    ],
    exports: [
        MatCardModule,
        MatToolbarModule,
        MatTableModule,
        MatBadgeModule,
        MatListModule,
        MatGridListModule,
        MatProgressBarModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatSelectModule,
        MatPaginatorModule,
        MatListModule,
    ],
    declarations: [],
    providers: [],
})
export class CommonMaterialModules {

}
