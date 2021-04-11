import { NgModule } from '@angular/core';
import { AngularStudioClrConfirmComponent } from './angularstudio-clr-confirm.component';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';


@NgModule({

    declarations: [

        AngularStudioClrConfirmComponent

    ],

    imports: [

        ClarityModule,
        CommonModule

    ],

    exports: [

        AngularStudioClrConfirmComponent

    ],

    entryComponents: [

        AngularStudioClrConfirmComponent

    ]

})
export class AngularStudioClrConfirmModule {
}
