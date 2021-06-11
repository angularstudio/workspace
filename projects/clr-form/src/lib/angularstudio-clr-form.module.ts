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
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({

    declarations: [

        AngularstudioClrFormComponent,
        AngularstudioClrFormInputComponent,
        AngularStudioClrFormSelectComponent,
        AngularStudioClrFormCheckboxComponent,
        AngularStudioClrFormTextareaComponent,
        AngularStudioClrFormRangeComponent

    ],

    imports: [

        CommonModule,
        ClarityModule,
        ReactiveFormsModule,

        NgxSliderModule

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
