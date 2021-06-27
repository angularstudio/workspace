import { NgModule } from '@angular/core';
import { AngularStudioUserRegisterComponent } from './angularstudio-user-register.component';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({

    declarations: [

        AngularStudioUserRegisterComponent

    ],

    imports: [

        CommonModule,
        ReactiveFormsModule,
        ClarityModule

    ],

    exports: [

        AngularStudioUserRegisterComponent

    ],

    entryComponents: [

        AngularStudioUserRegisterComponent

    ]

})
export class AngularStudioUserRegisterModule {
}
