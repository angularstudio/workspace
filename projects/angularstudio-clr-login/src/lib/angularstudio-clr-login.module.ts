import { NgModule } from '@angular/core';
import { AngularStudioClrLoginComponent } from './angularstudio-clr-login.component';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({

    declarations: [

        AngularStudioClrLoginComponent

    ],

    imports: [

        CommonModule,
        ClarityModule,
        ReactiveFormsModule

    ],

    exports: [

        AngularStudioClrLoginComponent

    ]

})
export class AngularStudioClrLoginModule {
}
