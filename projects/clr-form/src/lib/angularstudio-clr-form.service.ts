import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { AngularStudioClrFormConfig } from './angularstudio-clr-form-config';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { AngularstudioClrFormComponent } from './angularstudio-clr-form.component';
import { AngularStudioClrFormSaveResult } from './angularstudio-clr-form-save-result';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioClrFormService<T> {

    public config: { [ name: string ]: AngularStudioClrFormConfig<T> } = {};
    public formGroups: { [ name: string ]: FormGroup } = {};
    public value$: Subject<T> = new Subject();
    public save$: Subject<AngularStudioClrFormSaveResult<T>> = new Subject();

    public constructor(private formBuilder: FormBuilder,
                       private readonly factoryResolver: ComponentFactoryResolver) {

    }

    public init(config: AngularStudioClrFormConfig<T>) {

        if (this.config[ config.name ]) {

            this.config[ config.name ].rootViewContainer.remove(0);

            delete this.config[ config.name ];

        }

        this.config[ config.name ] = new AngularStudioClrFormConfig(config);

        const formControls = {};

        for (let i = 0; i < config.fields.length; i++) {

            formControls[ config.fields[ i ].name ] = new FormControl(config.fields[ i ].value, config.fields[ i ].validators);

        }

        this.formGroups[ config.name ] = this.formBuilder.group(formControls, {});

        this.formGroups[ config.name ].valueChanges.subscribe(v => {

            if (this.formGroups[ config.name ].valid) {

                this.value$.next(v);

            }

        });

        const component = this.config[ config.name ].rootViewContainer.createComponent(this.factoryResolver.resolveComponentFactory(AngularstudioClrFormComponent));

        component.instance.name = config.name;
        component.instance.formGroup = this.formGroups[ config.name ];

    }

    public edit(name: string): void {

        this.config[ name ].fields.forEach(field => field.editing = true);

    }

    public save(name: string): void {

        this.save$.next({

            name,
            value: this.formGroups[ name ].value

        });

    }

}
