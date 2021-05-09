import { SubNavConfig } from './sub-nav/sub-nav-config';
import { HeaderConfig } from './header/header-config';

export class AngularStudioManagerConfig {

    public header: HeaderConfig;
    public subNav: SubNavConfig;

    public constructor(obj?: AngularStudioManagerConfig) {

        this.header = new HeaderConfig(obj ? obj.header : null);
        this.subNav = new SubNavConfig(obj ? obj.subNav : null);

    }

}
