import { AngularStudioClrMetadataConfigField } from './angularstudio-clr-metadata-config-field';
import { ViewContainerRef } from '@angular/core';

export class AngularStudioClrMetadataConfig {

    public name: string;
    public contextId?: string;
    public width?: string;
    public align?: 'left' | 'right' = 'right';
    public max?: number;
    public rootViewContainer: ViewContainerRef;
    public fields: Array<AngularStudioClrMetadataConfigField> = [];
    public editing?: boolean = false;
    public saveShow?: boolean = true;
    public allowAdditional?: boolean = true;

    public constructor(config: AngularStudioClrMetadataConfig) {

        for (let i = 0; i < config.fields.length; i++) {

            this.fields.push(new AngularStudioClrMetadataConfigField(config.fields[ i ]));

        }

        Object.assign(this, config);

    }

}
