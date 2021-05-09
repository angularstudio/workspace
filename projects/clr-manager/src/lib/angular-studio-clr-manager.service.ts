import { Injectable } from '@angular/core';
import { AngularStudioManagerConfig } from './angular-studio-manager-config';
import { AngularStudioClrSideNavService } from './side-nav/side-nav.service';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioClrManagerService {

    public config: AngularStudioManagerConfig;

    public constructor(private readonly sideNavService: AngularStudioClrSideNavService) {

        this.config = new AngularStudioManagerConfig();

    }

    public configure(config: AngularStudioManagerConfig) {

        this.config = new AngularStudioManagerConfig(config);

    }

}
