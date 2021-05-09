import { AngularStudioClrMetadataConfigFieldLabel } from './angularstudio-clr-metadata-config-field-label';
import { AngularStudioClrMetadataConfigFieldValue } from './angularstudio-clr-metadata-config-field-value';

export class AngularStudioClrMetadataConfigField {

    public id?: string;
    public name: string;
    public helper?: string;
    public wavy?: boolean = false;
    public editing?: boolean = false;
    public deletable?: boolean = true;
    public sensitive?: boolean = false;

    public label: AngularStudioClrMetadataConfigFieldLabel;
    public value: AngularStudioClrMetadataConfigFieldValue;

    public constructor(config: AngularStudioClrMetadataConfigField) {

        Object.assign(this, config);

    }

}
