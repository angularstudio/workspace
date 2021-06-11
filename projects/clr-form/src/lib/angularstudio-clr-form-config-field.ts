import { ValidatorFn } from '@angular/forms';

export class AngularStudioClrFormConfigField<T> {

    public name: string;
    public label: string;
    public description?: string;
    public placeholder?: string;
    public wavy?: boolean = false;
    public type: 'text' | 'textarea' | 'select' | 'checkbox' | 'toggle' | 'range';
    public value: any;
    public helper?: string;
    public data?: Array<T>;
    public validators?: Array<ValidatorFn>;
    public editing?: boolean = false;
    public saveShow?: boolean = true;
    public min?: number;
    public max?: number;

    public constructor(field: AngularStudioClrFormConfigField<T>) {

        Object.assign(this, field);

        console.log(this);
    }

}

