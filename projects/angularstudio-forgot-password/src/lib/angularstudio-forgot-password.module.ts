import { NgModule } from '@angular/core';
import { AngularStudioForgotPasswordComponent } from './angularstudio-forgot-password.component';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({

    declarations: [

        AngularStudioForgotPasswordComponent

    ],

    imports: [

        ClarityModule,
        CommonModule,
        ReactiveFormsModule

    ],

    exports: [

        AngularStudioForgotPasswordComponent

    ],

    entryComponents: [

        AngularStudioForgotPasswordComponent

    ]

})
export class AngularStudioForgotPasswordModule {
}
