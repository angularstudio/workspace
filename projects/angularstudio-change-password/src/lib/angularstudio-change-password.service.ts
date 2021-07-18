import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AngularStudioChangePasswordConfig } from './angularstudio-change-password-config';
import { Subject, Observable } from 'rxjs';
import { AngularStudioChangePasswordResult } from './angularstudio-change-password-result';
import { AngularStudioChangePasswordComponent } from './angularstudio-change-password.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { checkNotSame, checkMatching } from './angularstudio-change-password-validators';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioChangePasswordService {

    public config: AngularStudioChangePasswordConfig;
    public subject$: Subject<AngularStudioChangePasswordResult> = new Subject();
    public rootViewContainer: ViewContainerRef;

    public formGroup = new FormGroup({

        current: new FormControl('', [

            Validators.minLength(8),
            Validators.maxLength(255)

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

            checkMatching,
            checkNotSame

        ]

    });

    public constructor(private readonly factoryResolver: ComponentFactoryResolver) {

    }

    public setRootContainer(rootViewContainer: ViewContainerRef) {

        this.rootViewContainer = rootViewContainer;

    }

    public open(config?: AngularStudioChangePasswordConfig): Observable<AngularStudioChangePasswordResult> {

        this.config = new AngularStudioChangePasswordConfig(config);

        this.rootViewContainer.createComponent(this.factoryResolver.resolveComponentFactory(AngularStudioChangePasswordComponent));

        return this.subject$;

    }

    public close(): void {

        this.rootViewContainer.clear();

    }

}
