import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ClrModal } from '@clr/angular';
import { AngularStudioForgotPasswordEvent } from './angularstudio-forgot-password-event';
import { AngularStudioForgotPasswordService } from './angularstudio-forgot-password.service';

@Component({

    selector: 'angularstudio-forgot-password',
    templateUrl: './angularstudio-forgot-password.component.html',
    styleUrls: [ './angularstudio-forgot-password.component.scss' ],
    encapsulation: ViewEncapsulation.None

})
export class AngularStudioForgotPasswordComponent {

    @ViewChild(ClrModal) public view: ClrModal;

    public constructor(public readonly forgotPasswordService: AngularStudioForgotPasswordService) {

    }

    public onCancelClick(): void {

        this.view.closable = true;

        this.forgotPasswordService.subject$.next({

            event: AngularStudioForgotPasswordEvent.CANCEL,
            result: false

        });

        this.view.close();

    }

    public onNextClick(): void {

        this.view.closable = true;

        this.forgotPasswordService.subject$.next({

            event: AngularStudioForgotPasswordEvent.NEXT,
            result: true,
            email: this.forgotPasswordService.formGroup.get('email').value

        });

    }

}
