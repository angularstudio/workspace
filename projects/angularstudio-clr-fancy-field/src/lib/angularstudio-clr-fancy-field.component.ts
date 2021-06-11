import { Component, Input } from '@angular/core';
import { AngularStudioClrFancyFieldConfig } from './angularstudio-clr-fancy-field-config';

@Component({

    selector: 'angularstudio-clr-fancy-field',
    templateUrl: './angularstudio-clr-fancy-field.component.html',
    styleUrls: [ './angularstudio-clr-fancy-field.component.scss' ]

})
export class AngularStudioClrFancyFieldComponent {

    @Input() public config: AngularStudioClrFancyFieldConfig;

}
