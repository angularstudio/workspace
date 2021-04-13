import { Injectable } from '@angular/core';
import { AngularStudioClrLoginConfig } from './angularstudio-clr-login-config';
import { Subject, Observable } from 'rxjs';
import { AngularStudioClrLoginEvent } from './angularstudio-clr-login-event';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioClrLoginService {

    public config: AngularStudioClrLoginConfig;
    public events$: Subject<AngularStudioClrLoginEvent> = new Subject();
    public defaults$: Subject<{ email: string, password: string }> = new Subject();

    public init(config: AngularStudioClrLoginConfig): Observable<AngularStudioClrLoginEvent> {

        this.events$ = new Subject();

        this.config = new AngularStudioClrLoginConfig(config);

        if (this.config.defaults) {

            this.defaults$.next(this.config.defaults);

        }

        return this.events$;

    }

}
