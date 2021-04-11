import { Injectable } from '@angular/core';
import { AngularStudioClrFormConfig } from './angularstudio-clr-form-config';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioClrFormService<T> {

    public config: AngularStudioClrFormConfig<T>;
    public formGroup: FormGroup;
    public value$: Subject<T> = new Subject();

    public constructor(private formBuilder: FormBuilder) {

    }

    public init(config: AngularStudioClrFormConfig<T>) {

        this.config = new AngularStudioClrFormConfig(config);

        const formControls = {};

        for (let i = 0; i < config.fields.length; i++) {

            formControls[ config.fields[ i ].name ] = new FormControl(config.fields[ i ].value, config.fields[ i ].validators);

        }

        this.formGroup = this.formBuilder.group(formControls, {});

        this.formGroup.valueChanges.subscribe(v => {

            if (this.formGroup.valid) {

                this.value$.next(v);

            }

        });

    }

    public edit(): void {

        this.config.fields.forEach(field => field.editing = true);

    }

}
