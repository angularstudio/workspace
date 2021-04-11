import { Component, ViewChild } from '@angular/core';
import { AngularStudioClrConfirmService } from './angularstudio-clr-confirm.service';
import { ClrModal } from '@clr/angular';
import { AngularstudioClrConfirmEvent } from './angularstudio-clr-confirm-event';

@Component({

    selector: 'lib-angularstudio-clr-confirm',
    templateUrl: './angularstudio-clr-confirm.component.html',
    styleUrls: [ './angularstudio-clr-confirm.component.scss' ]

})
export class AngularStudioClrConfirmComponent {

    @ViewChild(ClrModal) public view: ClrModal;

    public constructor(public readonly confirmService: AngularStudioClrConfirmService) {

    }

    public onCancelClick(): void {

        this.view.closable = true;

        this.confirmService.subject$.next({

            event: AngularstudioClrConfirmEvent.CANCEL,
            result: false

        });

        this.view.close();

    }

    public onNextClick(): void {

        this.view.closable = true;

        this.confirmService.subject$.next({

            event: AngularstudioClrConfirmEvent.NEXT,
            result: true

        });

        this.view.close();

    }

}
