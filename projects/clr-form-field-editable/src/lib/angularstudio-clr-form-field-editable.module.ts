import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularstudioClrFormFieldEditableComponent } from './angularstudio-clr-form-field-editable.component';


@NgModule({
    declarations: [

        AngularstudioClrFormFieldEditableComponent

    ],

    imports: [

        CommonModule,
        ClarityModule,
        ReactiveFormsModule

    ],

    exports: [

        AngularstudioClrFormFieldEditableComponent

    ]

})
export class AngularstudioClrFormFieldEditableModule {
}
