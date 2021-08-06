import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AngularStudioChangePasswordConfig } from './angularstudio-change-password-config';
import { Subject, Observable } from 'rxjs';
import { AngularStudioChangePasswordResult } from './angularstudio-change-password-result';
import { AngularStudioChangePasswordComponent } from './angularstudio-change-password.component';
import { FormGroup, FormControl, Validators, FormBuilder, ValidatorFn } from '@angular/forms';
import { checkNotSame, checkMatching } from './angularstudio-change-password-validators';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioChangePasswordService {

    public config: AngularStudioChangePasswordConfig;
    public subject$: Subject<AngularStudioChangePasswordResult>;
    public rootViewContainer: ViewContainerRef;
    public formGroup: FormGroup;

    public constructor(private readonly factoryResolver: ComponentFactoryResolver,
                       private readonly formBuilder: FormBuilder) {

    }

    public setRootContainer(rootViewContainer: ViewContainerRef) {

        this.rootViewContainer = rootViewContainer;

    }

    public open(config?: AngularStudioChangePasswordConfig): Observable<AngularStudioChangePasswordResult> {

        this.subject$ = new Subject();

        this.config = new AngularStudioChangePasswordConfig(config);

        const formControls: { [ name: string ]: FormControl } = {};
        const validators: Array<ValidatorFn> = [];

        if (config.showCurrent) {

            formControls[ 'current' ] = new FormControl('', [

                Validators.minLength(8),
                Validators.maxLength(255)

            ]);

            validators.push(checkNotSame);

        }

        formControls[ 'new' ] = new FormControl('', [

            Validators.minLength(8),
            Validators.maxLength(255)

        ]);

        formControls[ 'confirm' ] = new FormControl('', [

            Validators.minLength(8),
            Validators.maxLength(255)

        ]);

        validators.push(checkMatching);

        this.formGroup = this.formBuilder.group(formControls, { validators });

        this.rootViewContainer.createComponent(this.factoryResolver.resolveComponentFactory(AngularStudioChangePasswordComponent));

        return this.subject$;

    }

    public close(): void {

        this.rootViewContainer.clear();

    }

}
