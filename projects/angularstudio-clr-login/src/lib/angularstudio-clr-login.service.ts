import { Injectable } from '@angular/core';
import { AngularStudioClrLoginConfig } from './angularstudio-clr-login-config';
import { Subject } from 'rxjs';
import { AngularStudioClrLoginEvent } from './angularstudio-clr-login-event';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioClrLoginService {

    public config: AngularStudioClrLoginConfig;
    public events$: Subject<AngularStudioClrLoginEvent> = new Subject();

    public init(config: AngularStudioClrLoginConfig) {

        this.events$ = new Subject();

        this.config = new AngularStudioClrLoginConfig(config);

    }

}
