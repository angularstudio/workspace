import { Component } from '@angular/core';
import { AngularStudioClrManagerService } from '../angular-studio-clr-manager.service';

@Component({

    selector: 'angularstudio-clr-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]

})
export class HeaderComponent {

    public constructor(public managerService: AngularStudioClrManagerService) {

    }

}
