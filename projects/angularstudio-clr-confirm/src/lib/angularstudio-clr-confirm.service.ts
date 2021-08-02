import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AngularStudioClrConfirmComponent } from './angularstudio-clr-confirm.component';
import { AngularStudioClrConfirmConfig } from './angularstudio-clr-confirm-config';
import { Subject, Observable } from 'rxjs';
import { AngularstudioClrConfirmResult } from './angularstudio-clr-confirm-result';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioClrConfirmService {

    public config: AngularStudioClrConfirmConfig;
    public subject$: Subject<AngularstudioClrConfirmResult>;

    public rootViewContainer: ViewContainerRef;

    public constructor(private readonly factoryResolver: ComponentFactoryResolver) {

    }

    public setRootContainer(rootViewContainer: ViewContainerRef) {

        this.rootViewContainer = rootViewContainer;

    }

    public open(config: AngularStudioClrConfirmConfig): Observable<AngularstudioClrConfirmResult> {

        this.subject$ = new Subject();

        this.config = new AngularStudioClrConfirmConfig(config);

        this.rootViewContainer.createComponent(this.factoryResolver.resolveComponentFactory(AngularStudioClrConfirmComponent));

        return this.subject$;

    }

}
