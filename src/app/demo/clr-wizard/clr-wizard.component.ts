import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { AngularStudioClrWizardService } from '../../../../projects/angularstudio-clr-wizard/src/lib/angularstudio-clr-wizard.service';
import { ClrFormContactInfoComponent } from '../clr-form/clr-form-contact-info/clr-form-contact-info.component';
import { ClrWizardStepUserInfoComponent } from './clr-wizard-step-user-info/clr-wizard-step-user-info.component';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-clr-wizard',
    templateUrl: './clr-wizard.component.html',
    styleUrls: [ './clr-wizard.component.scss' ]
})
export class ClrWizardComponent implements AfterViewInit {

    @ViewChild('angularstudioclrcontainer', { read: ViewContainerRef }) view: ViewContainerRef;

    public constructor(private readonly wizardService: AngularStudioClrWizardService) {

    }

    public ngAfterViewInit() {

        this.wizardService.setRootContainer(this.view);

    }

    public open() {

        this.wizardService.init({

            title: 'Create User',
            size: 'lg',

            steps: [

                {

                    name: 'info',
                    navTitle: 'Contact Info',
                    pageTitle: 'Enter contact info',
                    componentType: ClrFormContactInfoComponent,
                    nextEnabled: true

                }, {

                    name: 'user',
                    navTitle: 'User Info',
                    pageTitle: 'Enter user info',
                    componentType: ClrWizardStepUserInfoComponent,
                    nextEnabled: true

                }

            ]

        });

        this.wizardService.finish$.pipe(first()).subscribe(() => {

            console.log('finished');

            this.wizardService.close();

        });

    }

}
