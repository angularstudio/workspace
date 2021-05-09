import { AngularStudioSideNavItem } from './angular-studio-side-nav-item';
import { AngularStudioSideNavButton } from './angular-studio-side-nav-button';

export class SideNavConfig {

    public itemsTitle?: string;
    public buttonsTitle?: string;

    public buttons?: Array<AngularStudioSideNavButton>;
    public items?: Array<AngularStudioSideNavItem>;

    public constructor(obj: SideNavConfig) {

        Object.assign(this, obj);

    }

}
