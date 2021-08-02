import { Subject } from 'rxjs';
import { ComponentType } from '@angular/cdk/overlay';
import { AngularstudioModalAlertConfig } from './angularstudio-modal-alert-config';

export class AngularStudioModalConfig {

    public title: string;
    public titleIcon?: string;
    public description?: string;
    public componentType: ComponentType<any>;
    public size?: 'sm' | 'md' | 'lg' = 'md';
    public previousLabel?: string = 'CANCEL';
    public nextLabel?: string = 'OK';
    public closeOnNext?: boolean = true;
    public nextDisabled$?: Subject<boolean> = new Subject();
    public alerts?: Array<AngularstudioModalAlertConfig>;

    public constructor(config: AngularStudioModalConfig) {

        Object.assign(this, config);

    }

}
