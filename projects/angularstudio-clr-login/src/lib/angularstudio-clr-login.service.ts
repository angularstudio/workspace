import { Injectable } from '@angular/core';
import { AngularStudioClrLoginConfig } from './angularstudio-clr-login-config';
import { Subject, Observable, ReplaySubject } from 'rxjs';
import { AngularStudioClrLoginEvent } from './angularstudio-clr-login-event';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioClrLoginService {

    public config: AngularStudioClrLoginConfig;
    public events$: Subject<AngularStudioClrLoginEvent> = new Subject();
    public defaults$: ReplaySubject<{ email: string }> = new ReplaySubject(1);
    public click$: Subject<string> = new Subject();

    public init(config: AngularStudioClrLoginConfig): Observable<AngularStudioClrLoginEvent> {

        this.events$ = new Subject();

        this.config = new AngularStudioClrLoginConfig(config);

        if (this.config.defaults) {

            this.defaults$.next(this.config.defaults);

        }

        return this.events$;

    }

}
