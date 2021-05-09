import { Component } from '@angular/core';
import { AngularStudioClrSideNavService } from '../../../../../projects/clr-manager/src/lib/side-nav/side-nav.service';
import { Subject } from 'rxjs';
import { AngularStudioSideNavButton } from '../../../../../projects/clr-manager/src/lib/side-nav/angular-studio-side-nav-button';
import { AngularStudioSideNavItem } from '../../../../../projects/clr-manager/src/lib/side-nav/angular-studio-side-nav-item';
import { AngularStudioSideNavButtonClass } from '../../../../../projects/clr-manager/src/lib/side-nav/angular-studio-side-nav-button-class';

@Component({
    selector: 'app-child-one',
    templateUrl: './child-one.component.html',
    styleUrls: [ './child-one.component.scss' ]
})
export class ChildOneComponent {

    public constructor(private readonly sideNavService: AngularStudioClrSideNavService) {

        const buttonClick$ = new Subject<AngularStudioSideNavButton>();
        const itemClick$ = new Subject<AngularStudioSideNavItem>();

        buttonClick$.subscribe(sideNavButton => {

            console.log(sideNavButton);

        });

        itemClick$.subscribe(sideNavButton => {

            console.log(sideNavButton);

        });

        const button1 = {

            class: AngularStudioSideNavButtonClass.SUCCESS,
            label: 'Action One',
            observable: buttonClick$,
            path: '/demo/child-two'

        };

        const button2 = {

            class: AngularStudioSideNavButtonClass.DANGER_OUTLINE,
            label: 'asdfasdfasf',
            observable: buttonClick$,
            path: '/demo/child-two'

        };

        setTimeout(() => {

            sideNavService.config.buttons.pop();

        }, 3000);

        setTimeout(() => {

            sideNavService.config.buttons.push(button2);

        }, 6000);

        sideNavService.update({

            buttonsTitle: 'Quick Actions',
            buttons: [],

            itemsTitle: 'Subnav Title',
            items: [

                {

                    label: 'Link one',
                    icon: 'fa fa-link',
                    path: '/demo/child-two',
                    observable: itemClick$

                }, {

                    label: 'Link one',
                    icon: 'fa fa-link',
                    path: '/demo/child-two',
                    observable: itemClick$

                }, {

                    label: 'Link one',
                    icon: 'fa fa-link',
                    path: '/demo/child-two',
                    observable: itemClick$
                }

            ]

        });

    }

}
