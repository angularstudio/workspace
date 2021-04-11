import { AngularStudioClrFormConfigField } from './angularstudio-clr-form-config-field';

export class AngularStudioClrFormConfig<T> {

    public width: string;
    public fields: Array<AngularStudioClrFormConfigField<any>>;

    public constructor(config: AngularStudioClrFormConfig<T>) {

        Object.assign(this, config);

        this.fields = [];

        for (let i = 0; i < config.fields.length; i++) {

            this.fields.push(new AngularStudioClrFormConfigField<any>(config.fields[ i ]));

        }

    }

}
