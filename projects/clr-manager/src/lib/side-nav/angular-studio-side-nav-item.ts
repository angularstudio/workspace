import { Subject } from 'rxjs';

export class AngularStudioSideNavItem {

    public label: string;
    public path?: string;
    public icon?: string;
    public observable?: Subject<any>;

}
