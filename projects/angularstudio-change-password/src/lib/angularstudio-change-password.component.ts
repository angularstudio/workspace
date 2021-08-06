import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ClrModal } from '@clr/angular';
import { AngularStudioChangePasswordService } from './angularstudio-change-password.service';
import { AngularStudioChangePasswordEvent } from './angularstudio-change-password-event';

@Component({

    selector: 'angularstudio-change-password',
    templateUrl: './angularstudio-change-password.component.html',
    styleUrls: [ './angularstudio-change-password.component.scss' ],
    encapsulation: ViewEncapsulation.None

})
export class AngularStudioChangePasswordComponent {

    @ViewChild(ClrModal) public view: ClrModal;

    public constructor(public readonly changePasswordService: AngularStudioChangePasswordService) {

    }

    public onCancelClick(): void {

        this.view.closable = true;

        this.changePasswordService.subject$.next({

            event: AngularStudioChangePasswordEvent.CANCEL,
            result: false

        });

        this.view.close();

    }

    public onNextClick(): void {

        this.view.closable = true;

        this.changePasswordService.subject$.next({

            event: AngularStudioChangePasswordEvent.NEXT,
            result: true,
            current: this.changePasswordService.formGroup.get('current')?.value,
            password: this.changePasswordService.formGroup.get('new').value

        });

    }

}
