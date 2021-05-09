import { Injectable } from '@angular/core';
import { SideNavConfig } from './side-nav-config';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioClrSideNavService {

    public config: SideNavConfig;

    public constructor() {

    }

    public update(config: SideNavConfig) {

        this.config = new SideNavConfig(config);

    }

}
