import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularStudioModalAction } from './angularstudio-modal-action';
import { AngularStudioModalConfig } from './angularstudio-modal-config';
import { AngularStudioModalComponent } from './angularstudio-modal.component';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioModalService {

    public config: AngularStudioModalConfig;
    public subject$: Subject<AngularStudioModalAction> = new Subject();
    public rootViewContainer: ViewContainerRef;
    public container: ViewContainerRef;

    public constructor(private readonly factoryResolver: ComponentFactoryResolver) {

    }

    public setRootContainer(rootViewContainer: ViewContainerRef) {

        this.rootViewContainer = rootViewContainer;

    }

    public open(config: AngularStudioModalConfig): Observable<AngularStudioModalAction> {

        this.config = new AngularStudioModalConfig(config);

        this.rootViewContainer.createComponent(this.factoryResolver.resolveComponentFactory(AngularStudioModalComponent));

        return this.subject$;

    }

}
