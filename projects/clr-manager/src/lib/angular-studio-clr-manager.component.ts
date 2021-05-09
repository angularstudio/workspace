import { Component } from '@angular/core';
import { AngularStudioClrSideNavService } from './side-nav/side-nav.service';

@Component({

    selector: 'angularstudio-clr-manager',
    templateUrl: './angular-studio-clr-manager.component.html',
    styles: []

})
export class AngularStudioClrManagerComponent {

    public constructor(public readonly sideNavService: AngularStudioClrSideNavService) {

    }

}
