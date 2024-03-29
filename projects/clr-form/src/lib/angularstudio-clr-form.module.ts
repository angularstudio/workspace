import { NgModule } from '@angular/core';
import { AngularstudioClrFormComponent } from './angularstudio-clr-form.component';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { AngularstudioClrFormInputComponent } from './angularstudio-clr-form-input/angularstudio-clr-form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularStudioClrFormSelectComponent } from './angularstudio-clr-form-select/angularstudio-clr-form-select.component';
import { AngularStudioClrFormCheckboxComponent } from './angularstudio-clr-form-checkbox/angularstudio-clr-form-checkbox.component';
import { AngularStudioClrFormTextareaComponent } from './angularstudio-clr-form-textarea/angularstudio-clr-form-textarea.component';
import { AngularStudioClrFormRangeComponent } from './angularstudio-clr-form-range/angularstudio-clr-form-range.component';
import { AngularstudioClrFormToggleComponent } from './angularstudio-clr-form-toggle/angularstudio-clr-form-toggle.component';

@NgModule({

    declarations: [

        AngularstudioClrFormComponent,
        AngularstudioClrFormInputComponent,
        AngularStudioClrFormSelectComponent,
        AngularStudioClrFormCheckboxComponent,
        AngularStudioClrFormTextareaComponent,
        AngularStudioClrFormRangeComponent,
        AngularstudioClrFormToggleComponent

    ],

    imports: [

        CommonModule,
        ClarityModule,
        ReactiveFormsModule

    ],

    exports: [

        AngularstudioClrFormComponent

    ],

    entryComponents: [

        AngularstudioClrFormComponent

    ]

})
export class AngularStudioClrFormModule {
}
