import { Injectable } from '@angular/core';
import { AngularStudioClrLoginConfig } from './angularstudio-clr-login-config';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioClrLoginService {

    public config: AngularStudioClrLoginConfig;

    public init(config: AngularStudioClrLoginConfig) {

        this.config = new AngularStudioClrLoginConfig(config);

    }

}
