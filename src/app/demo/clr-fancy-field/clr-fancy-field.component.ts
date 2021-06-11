import { Component } from '@angular/core';
import { AngularStudioClrFancyFieldService } from '../../../../projects/angularstudio-clr-fancy-field/src/lib/angularstudio-clr-fancy-field.service';

@Component({

    selector: 'app-clr-fancy-field',
    templateUrl: './clr-fancy-field.component.html',
    styleUrls: [ './clr-fancy-field.component.scss' ]

})
export class ClrFancyFieldComponent {

    public config: AngularStudioClrFancyFieldService;

    public constructor() {

        this.config = {

            iconClass: 'fa fa-cog',
            title: 'Server Type',
            description: 'Select your server type.'

        };

    }

}
