import {Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../common/auth/AuthService';
import { UserLoginDto } from '../user/dataModel/UserLoginDto';

@Component({
    selector: 'app-login',
    templateUrl: 'login.html'
})

export class LoginComponent {
    public isLoading: false;
    public user: UserLoginDto = {} as UserLoginDto;
    constructor() {
    }

    public loginSubmit(from: NgForm) {
        console.log(this.user);
    }
}

