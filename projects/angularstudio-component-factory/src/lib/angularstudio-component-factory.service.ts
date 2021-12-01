import {
    Injectable,
    ComponentRef,
    Injector,
    ApplicationRef,
    ComponentFactoryResolver,
    Type,
    EmbeddedViewRef,
    ViewContainerRef,
    ComponentFactory
} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioComponentFactoryService {

    private componentFactory: ComponentFactory<any>;

    /**
     * Hold a reference to the component created by the factory
     * resolver to be used for creation and destruction.
     *
     * @type {ComponentRef<T>}
     * @private
     */
    private componentRef: ComponentRef<any>;

    /**
     * Dependency injection via constructor.
     *
     * @param {Injector} injector Handles dependency injection such as managing providers.
     * @param {ApplicationRef} applicationRef Reference to the Angular application running on the page.
     * @param {ComponentFactoryResolver} componentFactoryResolver Registry that maps Components to generated ComponentFactory classes that can be used to create instances of components
     */
    public constructor(private readonly injector: Injector,
                       private readonly applicationRef: ApplicationRef,
                       private readonly componentFactoryResolver: ComponentFactoryResolver) {

    }

    private createComponentFactory<T>(componentType: Type<T>): ComponentFactory<T> {

        this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

        return this.componentFactory;

    }

    public createComponentInstance<T>(componentFactory: ComponentFactory<T>): ComponentRef<T> {

        this.componentRef = componentFactory.create(this.injector);

        return this.componentRef;

    }

    public createInApplicationRoot<T>(componentType: Type<T>): void {

        this.createComponentInstance<T>(this.createComponentFactory<T>(componentType));

        this.applicationRef.attachView(this.componentRef.hostView);

        document.body.appendChild((this.componentRef.hostView as EmbeddedViewRef<T>).rootNodes[ 0 ]);

    }

    public createInElementById<T>(elementId: string, componentType: Type<T>): void {

        this.createComponentInstance<T>(this.createComponentFactory<T>(componentType));

        // this.applicationRef.attachView(this.createComponent(componentType).hostView);
        //
        document.getElementById(elementId).appendChild((this.componentRef.hostView as EmbeddedViewRef<T>).rootNodes[ 0 ]);

    }

    public createInContainer<T>(viewContainerRef: ViewContainerRef, componentType: Type<T>): void {

        // viewContainerRef.createComponent(this.createComponent(componentType));

    }

}
