import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo.component';
import { ManagerComponent } from './manager/manager.component';
import { ChildComponent } from './manager/child/child.component';
import { ChildOneComponent } from './manager/child-one/child-one.component';
import { ChildTwoComponent } from './manager/child-two/child-two.component';
import { ClrSearchComponent } from './clr-search/clr-search.component';
import { ClrFormEditableComponent } from './clr-form-editable/clr-form-editable.component';
import { ClrFormComponent } from './clr-form/clr-form.component';
import { ClrWizardComponent } from './clr-wizard/clr-wizard.component';
import { ClrFormContactInfoComponent } from './clr-form/clr-form-contact-info/clr-form-contact-info.component';
import { ClrWizardStepUserInfoComponent } from './clr-wizard/clr-wizard-step-user-info/clr-wizard-step-user-info.component';
import { ClrConfirmComponent } from './clr-confirm/clr-confirm.component';
import { ClrLoginComponent } from './clr-login/clr-login.component';
import { ClrMetadataComponent } from './clr-metadata/clr-metadata.component';
import { DetailPaneComponent } from './clr-search/detail-pane/detail-pane.component';
import { RouterModule } from '@angular/router';
import { AngularStudioClrManagerModule } from '../../../projects/clr-manager/src/lib/angular-studio-clr-manager.module';
import { AngularStudioClrSearchModule } from '../../../projects/clr-search/src/lib/angular-studio-clr-search.module';
import { AngularStudioClrFormModule } from '../../../projects/clr-form/src/lib/angularstudio-clr-form.module';
import { AngularStudioClrMetadataModule } from '../../../projects/angularstudio-clr-metadata/src/lib/angularstudio-clr-metadata.module';
import { AngularStudioClrWizardModule } from '../../../projects/angularstudio-clr-wizard/src/lib/angularstudio-clr-wizard.module';
import { AngularStudioClrConfirmModule } from '../../../projects/angularstudio-clr-confirm/src/lib/angularstudio-clr-confirm.module';
import { AngularStudioClrLoginModule } from '../../../projects/angularstudio-clr-login/src/lib/angularstudio-clr-login.module';
import { ClarityModule } from '@clr/angular';

@NgModule({

    declarations: [

        DemoComponent,
        ManagerComponent,
        ChildComponent,
        ChildOneComponent,
        ChildTwoComponent,
        ClrSearchComponent,
        ClrFormEditableComponent,
        ClrFormComponent,
        ClrWizardComponent,
        ClrFormContactInfoComponent,
        ClrWizardStepUserInfoComponent,
        ClrConfirmComponent,
        ClrLoginComponent,
        ClrMetadataComponent,
        DetailPaneComponent

    ],

    imports: [

        CommonModule,
        ClarityModule,

        RouterModule.forChild([

            {

                path: 'demo',
                component: DemoComponent,
                children: [

                    {

                        path: 'child-one',
                        component: ChildOneComponent

                    }, {

                        path: 'child-two',
                        component: ChildTwoComponent

                    }, {

                        path: 'search',
                        component: ClrSearchComponent

                    }, {

                        path: 'clr-login',
                        component: ClrLoginComponent

                    }, {

                        path: 'clr-form-editable',
                        component: ClrFormEditableComponent

                    }, {

                        path: 'clr-form',
                        component: ClrFormComponent

                    }, {

                        path: 'clr-metadata',
                        component: ClrMetadataComponent

                    }, {

                        path: 'clr-wizard',
                        component: ClrWizardComponent

                    }, {

                        path: 'clr-confirm',
                        component: ClrConfirmComponent

                    }

                ]

            }

        ]),

        AngularStudioClrManagerModule,
        AngularStudioClrSearchModule,
        AngularStudioClrFormModule,
        AngularStudioClrMetadataModule.forRoot({

            baseUrl: 'http://localhost:18081'

        }),
        // AngularStudioClrFormFieldEditableModule,
        AngularStudioClrWizardModule,
        AngularStudioClrConfirmModule,
        AngularStudioClrLoginModule

    ],

    entryComponents: [

        ClrFormContactInfoComponent,
        ClrWizardStepUserInfoComponent,

        DetailPaneComponent

    ]

})
export class DemoModule {
}
