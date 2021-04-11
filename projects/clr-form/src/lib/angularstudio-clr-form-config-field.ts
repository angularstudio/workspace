import { ValidatorFn } from '@angular/forms';

export class AngularStudioClrFormConfigField<T> {

    public name: string;
    public label: string;
    public placeholder?: string;
    public wavy?: boolean = false;
    public type: 'text' | 'select' | 'checkbox';
    public value: any;
    public helper?: string;
    public data?: Array<T>;
    public validators?: Array<ValidatorFn>;
    public editing?: boolean = false;

    public constructor(field: AngularStudioClrFormConfigField<T>) {

        Object.assign(this, field);

    }

}

