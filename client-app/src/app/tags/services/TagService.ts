import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { TagResource } from './TagResource';
import { TagDto } from '../dataModel/TagDto';
import { EditTagDto } from '../dataModel/EditTagDto';
import { CreateTagDto } from '../dataModel/CreateTagDto';

@Injectable()
export class TagService {
    constructor(private tagResource: TagResource) {
    }

    public getAllTagsItems(): Observable<TagDto[]> {
        return this.tagResource.findAll();
    }

    public createTag(createTagDto: CreateTagDto): Observable<TagDto> {
        return this.tagResource.create(createTagDto);
    }

    public editTag(editTagDto: EditTagDto): Observable<TagDto> {
        return this.tagResource.edit(editTagDto);
    }

    public deleteTag(tagId: number): Observable<void> {
        return this.tagResource.delete(tagId);
    }

}
