import { NgModule } from '@angular/core';
import { AngularStudioClrLoginComponent } from './angularstudio-clr-login.component';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularstudioClrLoginRegisterComponent } from './angularstudio-clr-login-register/angularstudio-clr-login-register.component';


@NgModule({

    declarations: [

        AngularStudioClrLoginComponent,
        AngularstudioClrLoginRegisterComponent

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
