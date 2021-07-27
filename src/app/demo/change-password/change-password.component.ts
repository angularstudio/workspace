import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { AngularStudioChangePasswordService } from '../../../../projects/angularstudio-change-password/src/lib/angularstudio-change-password.service';

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: [ './change-password.component.scss' ]
})
export class ChangePasswordComponent implements AfterViewInit {

    @ViewChild('modalRoot', { read: ViewContainerRef }) private readonly modalRoot: ViewContainerRef;

    public constructor(private readonly changePasswordService: AngularStudioChangePasswordService) {


    }

    public ngAfterViewInit() {

        this.changePasswordService.setRootContainer(this.modalRoot);

        setTimeout(() => this.open(), 500);

    }

    public open(): void {

        this.changePasswordService.open({ message: 'as asdfasdfas dfasdf asddsfs sdf sddf' });

    }

}
