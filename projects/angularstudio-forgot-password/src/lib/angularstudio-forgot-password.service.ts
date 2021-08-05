import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AngularStudioForgotPasswordComponent } from './angularstudio-forgot-password.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularStudioForgotPasswordConfig } from './angularstudio-forgot-password-config';
import { AngularStudioForgotPasswordResult } from './angularstudio-forgot-password-result';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioForgotPasswordService {

    public config: AngularStudioForgotPasswordConfig;
    public subject$: Subject<AngularStudioForgotPasswordResult>;
    public rootViewContainer: ViewContainerRef;
    public formGroup: FormGroup;

    public constructor(private readonly factoryResolver: ComponentFactoryResolver) {

    }

    public setRootContainer(rootViewContainer: ViewContainerRef) {

        this.rootViewContainer = rootViewContainer;

    }

    public open(config?: AngularStudioForgotPasswordConfig): Observable<AngularStudioForgotPasswordResult> {

        this.subject$ = new Subject();

        this.config = new AngularStudioForgotPasswordConfig(config);

        this.formGroup = new FormGroup({

            email: new FormControl('', [

                Validators.email,
                Validators.required

            ])

        });

        this.rootViewContainer.createComponent(this.factoryResolver.resolveComponentFactory(AngularStudioForgotPasswordComponent));

        return this.subject$;

    }

    public close(): void {

        this.rootViewContainer.clear();

    }

}
