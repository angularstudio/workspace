import { Component, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AngularStudioForgotPasswordService } from '../../../../projects/angularstudio-forgot-password/src/lib/angularstudio-forgot-password.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: [ './forgot-password.component.scss' ]
})
export class ForgotPasswordComponent implements AfterViewInit {

    @ViewChild('modalRoot', { read: ViewContainerRef }) private readonly modalRoot: ViewContainerRef;

    public constructor(private readonly forgotPasswordService: AngularStudioForgotPasswordService) {


    }

    public ngAfterViewInit() {

        this.forgotPasswordService.setRootContainer(this.modalRoot);

        setTimeout(() => this.open(), 500);

    }

    public open(): void {

        this.forgotPasswordService.open();

    }

}
