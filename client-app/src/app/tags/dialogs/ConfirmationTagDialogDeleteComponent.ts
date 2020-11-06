import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-confirmation-tag-dialog-delete',
    templateUrl: 'confirmationTagDialogDelete.html'
})

export class ConfirmationTagDialogDeleteComponent {
    constructor(private dialogRef: MatDialogRef<void>) { }

    public submit() {
        this.dialogRef.close(true);
    }
}
