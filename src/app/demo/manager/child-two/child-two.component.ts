import { Component } from '@angular/core';
import { AngularStudioClrSideNavService } from '../../../../../projects/clr-manager/src/lib/side-nav/side-nav.service';

@Component({
    selector: 'app-child-two',
    templateUrl: './child-two.component.html',
    styleUrls: [ './child-two.component.scss' ]
})
export class ChildTwoComponent {

    public constructor(private readonly sideNavService: AngularStudioClrSideNavService) {

        sideNavService.update({

            itemsTitle: 'Subnav 2 Title',
            items: [

                {

                    label: 'Link two',
                    path: '/demo/child-one'

                }

            ]

        });

    }
}
