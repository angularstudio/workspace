import { SubNavItem } from './sub-nav-item';

export class SubNavConfig {

    public backLabel?: string = 'Back';
    public backIcon?: string = 'fad fa-chevron-double-left';
    public backPath: string;

    public items: Array<SubNavItem>;

    public constructor(obj: SubNavConfig) {

        Object.assign(this, obj);

    }

}

