import { Component } from '@angular/core';
import { AngularStudioClrSideNavService } from './side-nav.service';
import { AngularStudioSideNavButton } from './angular-studio-side-nav-button';
import { AngularStudioSideNavItem } from './angular-studio-side-nav-item';

@Component({

    selector: 'angularstudio-clr-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: [ './side-nav.component.scss' ]

})
export class SideNavComponent {

    public constructor(public readonly sideNavService: AngularStudioClrSideNavService) {

    }

    public onButtonClick(button: AngularStudioSideNavButton) {

        if (button.observable) {

            button.observable.next(button);

        }

    }

    public onItemClick(item: AngularStudioSideNavItem) {

        if (item.observable) {

            item.observable.next(item);

        }

    }

}
