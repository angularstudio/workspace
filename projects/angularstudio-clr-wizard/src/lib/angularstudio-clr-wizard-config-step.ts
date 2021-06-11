import { ComponentType } from '@angular/cdk/overlay';
import { ComponentRef } from '@angular/core';
import { Subject } from 'rxjs';

export class AngularstudioClrWizardConfigStep {

    public name: string;
    public navTitle: string;
    public pageTitle: string;
    public nextEnabled: boolean;

    public componentType: ComponentType<any>;
    public componentRef?: ComponentRef<any>;

    public onPageLoad$?: Subject<AngularstudioClrWizardConfigStep>;

    public constructor(config: AngularstudioClrWizardConfigStep) {

        Object.assign(this, config);

    }

}
