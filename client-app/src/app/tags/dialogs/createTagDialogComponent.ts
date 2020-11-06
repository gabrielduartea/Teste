import {Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { CreateTagDto } from '../dataModel/CreateTagDto';
import { EditTagDto } from '../dataModel/EditTagDto';
import { TagService } from '../services/TagService';
import { TagDto } from '../dataModel/TagDto';

@Component({
    selector: 'app-create-tag-dialog',
    templateUrl: 'createTagDialog.html'
})

export class CreateTagDialogComponent implements OnInit {
    public tagModel: CreateTagDto | EditTagDto = {} as CreateTagDto;
    public isLoading = false;
    public isEditing = false;

    constructor(private dialogRef: MatDialogRef<CreateTagDialogComponent>, private tagService: TagService,
                @Inject(MAT_DIALOG_DATA) public data: {editTagDto: EditTagDto} ) {
    }

    ngOnInit(): void {
        this.isEditing = !!_.get(this.data, 'editTagDto');
        if (this.isEditing) {
            this.tagModel = _.clone(this.data.editTagDto);
        }
    }

    public submit(form: NgForm) {
        if (form.valid) {
            this.isLoading = true;
            this.handleAfterSubmit(
                this.isEditing ?
                this.tagService.editTag(this.tagModel as EditTagDto) :
                this.tagService.createTag(this.tagModel)
            );
        }
    }

    private handleAfterSubmit(observable: Observable<TagDto>) {
        return observable
                .pipe (finalize ( () => this.isLoading = false ))
                .subscribe ( (response) => {
                    this.dialogRef.close(response);
                });
    }
}
