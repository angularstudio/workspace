import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularStudioUserRegisterConfig } from './angularstudio-user-register-config';
import { AngularstudioUserRegisterResult } from './angularstudio-user-register-result';
import { checkMatching } from './angularstudio-user-register-validators';
import { AngularStudioUserRegisterComponent } from './angularstudio-user-register.component';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioUserRegisterService {

    public config: AngularStudioUserRegisterConfig;
    public subject$: Subject<AngularstudioUserRegisterResult> = new Subject();

    public rootViewContainer: ViewContainerRef;

    public formGroup = new FormGroup({

        email: new FormControl('', [

            Validators.email

        ]),

        new: new FormControl('', [

            Validators.minLength(8),
            Validators.maxLength(255)

        ]),

        confirm: new FormControl('', [

            Validators.minLength(8),
            Validators.maxLength(255)

        ])

    }, {

        validators: [

            checkMatching

        ]

    });

    public constructor(private readonly factoryResolver: ComponentFactoryResolver) {

    }

    public setRootContainer(rootViewContainer: ViewContainerRef) {

        this.rootViewContainer = rootViewContainer;

    }

    public open(config: AngularStudioUserRegisterConfig): Observable<AngularstudioUserRegisterResult> {

        this.config = new AngularStudioUserRegisterConfig(config);

        this.rootViewContainer.createComponent(this.factoryResolver.resolveComponentFactory(AngularStudioUserRegisterComponent));

        return this.subject$;

    }

    public close(): void {

        this.rootViewContainer.clear();

    }

}
