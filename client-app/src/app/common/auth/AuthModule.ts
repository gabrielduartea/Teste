import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthResource } from './AuthResource';
import { AuthService } from './AuthService';

@NgModule({
    imports: [
        HttpClientModule,
    ],
    exports: [],
    declarations: [],
    providers: [
        AuthResource,
        AuthService,
    ],
})
export class AuthModule {

}
