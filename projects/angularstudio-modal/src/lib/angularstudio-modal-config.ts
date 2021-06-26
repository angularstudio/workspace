import { Subject } from 'rxjs';
import { ComponentType } from '@angular/cdk/overlay';

export class AngularStudioModalConfig {

    public title: string;
    public titleIcon?: string;
    public componentType: ComponentType<any>;
    public size?: 'sm' | 'md' | 'lg' = 'md';
    public previousLabel?: string = 'CANCEL';
    public nextLabel?: string = 'OK';
    public nextDisabled$?: Subject<boolean> = new Subject();

    public constructor(config: AngularStudioModalConfig) {

        Object.assign(this, config);

    }

}
