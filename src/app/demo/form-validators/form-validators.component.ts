import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { emailMultipleValidator } from '../../../../projects/angularstudio-form-validators/src/lib/emailMultipleValidator';

@Component({
    selector: 'app-form-validators',
    templateUrl: './form-validators.component.html',
    styleUrls: [ './form-validators.component.scss' ]
})
export class FormValidatorsComponent {

    public emailMultipleFormGroup = new FormGroup({

        emails: new FormControl('', emailMultipleValidator())

    });

}
