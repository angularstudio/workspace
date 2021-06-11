import { Injectable, ComponentFactoryResolver, ViewContainerRef, QueryList } from '@angular/core';
import { AngularStudioClrWizardConfig } from './angularstudio-clr-wizard-config';
import { Subject } from 'rxjs';
import { ClrWizard } from '@clr/angular';
import { AngularStudioClrWizardComponent } from './angularstudio-clr-wizard.component';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioClrWizardService {

    public rootViewContainer: ViewContainerRef;
    public currentStep: string;
    public config: AngularStudioClrWizardConfig;
    public init$: Subject<AngularStudioClrWizardConfig> = new Subject();
    public finish$: Subject<void> = new Subject();
    public setup$: Subject<QueryList<ViewContainerRef>> = new Subject();
    public wizard: ClrWizard;
    public pages: QueryList<ViewContainerRef>;

    public constructor(private readonly factoryResolver: ComponentFactoryResolver) {

    }

    public setRootContainer(rootViewContainer: ViewContainerRef) {

        this.rootViewContainer = rootViewContainer;

    }

    public init(config: AngularStudioClrWizardConfig): void {

        this.config = new AngularStudioClrWizardConfig(config);

        this.rootViewContainer.createComponent(this.factoryResolver.resolveComponentFactory(AngularStudioClrWizardComponent));

        setTimeout(() => this.init$.next(this.config));

    }

    public setup(pages: QueryList<ViewContainerRef>): void {

        this.pages = pages;

        for (let i = 0; i < this.config.steps.length; i++) {

            this.config.steps[ i ].componentRef = this.pages.get(i).createComponent(this.factoryResolver.resolveComponentFactory(this.config.steps[ i ].componentType));

        }

    }

    public finish(): void {

        this.finish$.next();

    }

    public close(): void {

        this.wizard.close();

    }

}
