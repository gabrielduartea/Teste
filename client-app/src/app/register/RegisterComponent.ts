import { Component } from '@angular/core';
import { CreateUserDto } from '../user/dataModel/CreateUserDto';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: 'register.html',
})

export class RegisterComponent {

  Roles: any = ['Admin', 'Author', 'Reader'];
    public isLoading: false;
    public user: CreateUserDto = {} as CreateUserDto;
    constructor() {
    }

    public registerSubmit(from: NgForm) {
        console.log(this.user);
    }

}
