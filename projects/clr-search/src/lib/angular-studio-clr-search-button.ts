import { Subject } from 'rxjs';
import { AngularStudioClrSearchButtonClass } from './angular-studio-clr-search-button-class';

export class AngularStudioClrSearchButton {

    public id?: string;
    public label: string;
    public small?: boolean;
    public class: AngularStudioClrSearchButtonClass | string;
    public path?: string;
    public click$?: Subject<any>;

    public children?: Array<AngularStudioClrSearchButton>;

}
