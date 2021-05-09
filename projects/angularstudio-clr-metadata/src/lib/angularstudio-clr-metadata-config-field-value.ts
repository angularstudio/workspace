import { ValidatorFn } from '@angular/forms';

export class AngularStudioClrMetadataConfigFieldValue {

    public value?: string;
    public placeholder?: string = 'Enter a value...';
    public helper?: string;
    public wavy?: boolean = false;
    public editing?: boolean = false;
    public validators?: Array<ValidatorFn>;
    public focus?: boolean = false;
    public dynamic?: boolean = false;

    public constructor(config: AngularStudioClrMetadataConfigFieldValue) {

        Object.assign(this, config);

    }

}
