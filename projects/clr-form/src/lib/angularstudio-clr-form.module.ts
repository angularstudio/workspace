import { NgModule } from '@angular/core';
import { AngularstudioClrFormComponent } from './angularstudio-clr-form.component';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { AngularstudioClrFormInputComponent } from './angularstudio-clr-form-input/angularstudio-clr-form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularStudioClrFormSelectComponent } from './angularstudio-clr-form-select/angularstudio-clr-form-select.component';
import { AngularStudioClrFormCheckboxComponent } from './angularstudio-clr-form-checkbox/angularstudio-clr-form-checkbox.component';

@NgModule({

    declarations: [

        AngularstudioClrFormComponent,
        AngularstudioClrFormInputComponent,
        AngularStudioClrFormSelectComponent,
        AngularStudioClrFormCheckboxComponent

    ],

    imports: [

        CommonModule,
        ClarityModule,
        ReactiveFormsModule

    ],

    exports: [

        AngularstudioClrFormComponent

    ]

})
export class AngularstudioClrFormModule {
}
