import {Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TagDto } from './dataModel/TagDto';
import { TagService } from './services/TagService';
import { finalize } from 'rxjs/operators';
import { MatSnackBar, MatDialog } from '@angular/material';
import * as _ from 'lodash';
import { CreateTagDialogComponent } from './dialogs/createTagDialogComponent';
import { EditTagDto } from './dataModel/EditTagDto';
import { ConfirmationTagDialogDeleteComponent } from './dialogs/ConfirmationTagDialogDeleteComponent';

@Component({
    selector: 'app-tags',
    templateUrl: 'tags.html',
    styleUrls: ['tags.scss']
})

export class TagComponent implements OnInit {
    public isLoading = false;
    public displayedColumns: string[] = ['id', 'tag', 'description', 'action'];
    private tagListSubject: BehaviorSubject<TagDto[]> = new BehaviorSubject(null);
    constructor(private tagService: TagService, private matDialog: MatDialog,
                private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.isLoading = true;
        this.tagService.getAllTagsItems()
            .pipe (finalize ( () => this.isLoading = false ))
            .subscribe((tagsItems) => this.tagListSubject.next(tagsItems));
    }

    public getTags(): Observable<TagDto[]> {
        return this.tagListSubject.asObservable();
    }

    public createTag() {
        const ref  = this.matDialog.open(CreateTagDialogComponent, {
            width: '600px',
        });

        ref.afterClosed().subscribe((newTag: TagDto) => {
            if (newTag) {
                const list = this.tagListSubject.getValue();
                list.push(newTag);
                this.tagListSubject.next(_.cloneDeep(list));
                this.snackBar.open('The tag has been created!', null, {
                    duration: 2500,
                });
            }
        });
    }

    public editTag(editTag: EditTagDto) {
        const ref = this.matDialog.open(CreateTagDialogComponent, {
            width: '600px',
            data: {editTagDto: editTag}
        });

        ref.afterClosed().subscribe((editedTag: TagDto) => {
            if (editedTag) {
                const list = this.tagListSubject.getValue();
                const tagIndex = _.findIndex(list, tag => tag.id === editedTag.id);
                list[tagIndex] = editedTag;
                this.tagListSubject.next(_.cloneDeep(list));
                this.snackBar.open('The tag has been edited!', null, {
                    duration: 2500,
                });
            }
        });
    }

    public deleteTag(tagDto: TagDto) {
        const ref = this.matDialog.open(ConfirmationTagDialogDeleteComponent, {
            width: '300px;'
        });
        ref.afterClosed().subscribe((canContinue) => {
            if (canContinue) {
                this.isLoading = true;
                this.tagService.deleteTag(tagDto.id)
                    .pipe (finalize ( () => this.isLoading = false ))
                    .subscribe(() => {
                        const list = this.tagListSubject.getValue();
                        _.remove(list, tag => tag.id === tagDto.id);
                        this.tagListSubject.next(_.cloneDeep(list));
                        this.snackBar.open('The tag has been removed!', null, {
                            duration: 2500,
                        });
                    });
            }
        });
    }
}

