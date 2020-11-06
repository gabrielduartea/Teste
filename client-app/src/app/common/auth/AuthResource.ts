import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../api/ApiConfig';

@Injectable()
export class AuthResource {
    private readonly URL = ApiConfig + '/auth';

    constructor(private readonly httpclient: HttpClient) { }

}
