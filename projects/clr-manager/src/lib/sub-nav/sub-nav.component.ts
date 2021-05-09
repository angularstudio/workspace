import { Component } from '@angular/core';
import { AngularStudioClrManagerService } from '../angular-studio-clr-manager.service';

@Component({

    selector: 'angularstudio-clr-sub-nav',
    templateUrl: './sub-nav.component.html',
    styleUrls: [ './sub-nav.component.scss' ]

})
export class SubNavComponent {

    public constructor(public managerService: AngularStudioClrManagerService) {

    }

}
