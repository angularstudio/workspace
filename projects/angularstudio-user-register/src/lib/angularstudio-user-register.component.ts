import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { AngularStudioUserRegisterService } from './angularstudio-user-register.service';
import { ClrModal } from '@clr/angular';

@Component({

    selector: 'angularstudio-user-register',
    templateUrl: './angularstudio-user-register.component.html',
    styleUrls: [ './angularstudio-user-register.component.scss' ],
    encapsulation: ViewEncapsulation.None

})
export class AngularStudioUserRegisterComponent {

    @ViewChild(ClrModal) public view: ClrModal;

    public constructor(public readonly userRegisterService: AngularStudioUserRegisterService) {

    }

    public onCancelClick(): void {

        this.view.closable = true;

        this.userRegisterService.subject$.next({

            result: false

        });

        this.view.close();

    }

    public onNextClick(): void {

        this.view.closable = true;

        this.userRegisterService.subject$.next({

            result: true,
            value: {

                email: this.userRegisterService.formGroup.get('email').value,
                password: this.userRegisterService.formGroup.get('email').value

            }

        });

    }

}
