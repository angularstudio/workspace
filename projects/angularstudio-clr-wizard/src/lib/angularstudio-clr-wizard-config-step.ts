import { ComponentType } from '@angular/cdk/overlay';
import { ComponentRef } from '@angular/core';

export class AngularstudioClrWizardConfigStep {

    public name: string;
    public navTitle: string;
    public pageTitle: string;
    public nextEnabled: boolean;

    public componentType: ComponentType<any>;
    public componentRef?: ComponentRef<any>;

    public constructor(config: AngularstudioClrWizardConfigStep) {

        // Object.assign(this, config);

    }

}
