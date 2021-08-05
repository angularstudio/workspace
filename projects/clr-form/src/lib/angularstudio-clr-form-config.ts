import { AngularStudioClrFormConfigField } from './angularstudio-clr-form-config-field';
import { ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';

export class AngularStudioClrFormConfig<T> {

    public name: string;
    public width: string;
    public rootViewContainer: ViewContainerRef;
    public editing?: boolean = false;
    public saveShow?: boolean = true;
    public fieldChange$?: Subject<{ form: string, name: string, value: string }> = new Subject();
    public fields: Array<AngularStudioClrFormConfigField<any>>;

    public constructor(config: AngularStudioClrFormConfig<T>) {

        Object.assign(this, config);

        this.fields = [];

        for (let i = 0; i < config.fields.length; i++) {

            this.fields.push(new AngularStudioClrFormConfigField<any>(config.fields[ i ]));

        }

    }

}
