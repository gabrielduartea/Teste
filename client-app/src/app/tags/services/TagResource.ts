import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConfig } from '../../common/api/ApiConfig';
import { TagDto } from '../dataModel/TagDto';
import { CreateTagDto } from '../dataModel/CreateTagDto';
import { EditTagDto } from '../dataModel/EditTagDto';

@Injectable()
export class TagResource {
    private readonly URL = ApiConfig.url + '/tags';

    constructor(private httpClient: HttpClient) {
    }

    public findAll(): Observable<TagDto[]> {
        return this.httpClient.get(this.URL) as Observable<TagDto[]>;
    }

    public create(createTagDto: CreateTagDto): Observable<TagDto> {
        return this.httpClient.post(this.URL, createTagDto) as Observable<TagDto>;
    }

    public edit(editTagDto: EditTagDto): Observable<TagDto> {
        return this.httpClient.put(this.URL, editTagDto) as Observable<TagDto>;
    }

    public delete(tagId: number): Observable<any> {
        return this.httpClient.delete(this.URL + '/' + tagId);
    }

}
