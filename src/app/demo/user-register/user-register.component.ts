import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { AngularStudioUserRegisterService } from '../../../../projects/angularstudio-user-register/src/lib/angularstudio-user-register.service';

@Component({
    selector: 'app-user-register',
    templateUrl: './user-register.component.html',
    styleUrls: [ './user-register.component.scss' ]
})
export class UserRegisterComponent implements AfterViewInit {

    @ViewChild('modalRoot', { read: ViewContainerRef }) private readonly modalRoot: ViewContainerRef;

    public constructor(private readonly userRegisterService: AngularStudioUserRegisterService) {


    }

    public ngAfterViewInit() {

        this.userRegisterService.setRootContainer(this.modalRoot);

        setTimeout(() => this.open(), 500);

    }

    public open(): void {

        this.userRegisterService.open({ message: 'asdf' });

    }

}
