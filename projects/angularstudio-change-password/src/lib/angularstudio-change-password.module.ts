import { NgModule } from '@angular/core';
import { AngularStudioChangePasswordComponent } from './angularstudio-change-password.component';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({

    declarations: [

        AngularStudioChangePasswordComponent

    ],

    imports: [

        CommonModule,
        ClarityModule,
        ReactiveFormsModule

    ],

    exports: [

        AngularStudioChangePasswordComponent

    ],

    entryComponents: [

        AngularStudioChangePasswordComponent

    ]

})
export class AngularStudioChangePasswordModule {
}
