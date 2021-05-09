import { ValidatorFn } from '@angular/forms';

export class AngularStudioClrMetadataConfigFieldLabel {

    public value?: string;
    public placeholder?: string = 'Enter a name...';
    public helper?: string;
    public wavy?: boolean = false;
    public editing?: boolean = false;
    public validators?: Array<ValidatorFn>;
    public focus?: boolean = false;
    public dynamic?: boolean = false;

    public constructor(config: AngularStudioClrMetadataConfigFieldLabel) {

        Object.assign(this, config);

    }

}
