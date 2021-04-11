import { Subject } from 'rxjs';

export class AngularStudioClrConfirmConfig {

    public title: string;
    public titleIcon?: string;
    public message: string;
    public size?: 'sm' | 'md' | 'lg' = 'md';
    public previousLabel?: string = 'CANCEL';
    public nextLabel?: string = 'OK';
    public nextDisabled$?: Subject<boolean> = new Subject();

    public constructor(config: AngularStudioClrConfirmConfig) {

        Object.assign(this, config);

    }

}
