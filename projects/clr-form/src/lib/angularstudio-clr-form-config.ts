import { AngularStudioClrFormConfigField } from './angularstudio-clr-form-config-field';

export class AngularStudioClrFormConfig<T> {

    // public formGroup: FormGroup;

    public fields: Array<AngularStudioClrFormConfigField<any>>;

    public constructor(config: AngularStudioClrFormConfig<T>) {

        this.fields = [];

        for (let i = 0; i < config.fields.length; i++) {

            this.fields.push(new AngularStudioClrFormConfigField<any>(config.fields[ i ]));

        }

    }

}
