import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { AuthResource } from './AuthResource';

@Injectable()
export class AuthService {

    private readonly AUTH_STORAGE_KEY = 'auth_token';

    constructor(private readonly resource: AuthResource, private readonly router: Router) { }


}
