import { NgModule } from '@angular/core';
import { AngularStudioModalComponent } from './angularstudio-modal.component';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';


@NgModule({

    declarations: [

        AngularStudioModalComponent

    ],

    imports: [

        CommonModule,
        ClarityModule

    ],

    exports: [

        AngularStudioModalComponent

    ],

    entryComponents: [

        AngularStudioModalComponent

    ]

})
export class AngularStudioModalModule {
}
