import { Component, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { AngularStudioClrFormService } from './angularstudio-clr-form.service';
import { AngularStudioClrFormConfig } from './angularstudio-clr-form-config';
import { FormGroup } from '@angular/forms';

@Component({

    selector: 'angularstudio-clr-form',
    templateUrl: './angularstudio-clr-form.component.html',
    styleUrls: [ './angularstudio-clr-form.component.scss' ],
    encapsulation: ViewEncapsulation.None

})
export class AngularstudioClrFormComponent {

    public name: string;
    public config: AngularStudioClrFormConfig<any>;
    public formGroup: FormGroup;

    public constructor(private readonly changeDetector: ChangeDetectorRef,
                       public readonly formService: AngularStudioClrFormService<any>) {

        changeDetector.detach();

        setTimeout(() => changeDetector.reattach());

    }

}
