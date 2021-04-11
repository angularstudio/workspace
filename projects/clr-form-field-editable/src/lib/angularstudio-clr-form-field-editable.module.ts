import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularStudioClrFormFieldEditableComponent } from './angularstudio-clr-form-field-editable.component';

@NgModule({

    declarations: [

        AngularStudioClrFormFieldEditableComponent

    ],

    imports: [

        BrowserModule,
        CommonModule,
        ClarityModule,
        FormsModule,
        ReactiveFormsModule

    ],

    exports: [

        AngularStudioClrFormFieldEditableComponent

    ]

})
export class AngularstudioClrFormFieldEditableModule {
}
