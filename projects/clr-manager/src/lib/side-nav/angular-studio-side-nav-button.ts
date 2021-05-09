import { Subject } from 'rxjs';
import { AngularStudioSideNavButtonClass } from './angular-studio-side-nav-button-class';

export class AngularStudioSideNavButton {

    public label: string;
    public icon?: string;

    public class?: AngularStudioSideNavButtonClass = AngularStudioSideNavButtonClass.INFO;

    public path?: string;
    public observable?: Subject<any>;

}
