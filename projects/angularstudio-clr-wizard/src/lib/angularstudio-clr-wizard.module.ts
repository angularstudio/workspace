import { NgModule } from '@angular/core';
import { AngularStudioClrWizardComponent } from './angularstudio-clr-wizard.component';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';

@NgModule({

    declarations: [

        AngularStudioClrWizardComponent

    ],

    imports: [

        ClarityModule,
        CommonModule

    ],

    exports: [

        AngularStudioClrWizardComponent

    ],

    entryComponents: [

        AngularStudioClrWizardComponent

    ]

})
export class AngularStudioClrWizardModule {
}
