import { Component, OnInit } from '@angular/core';
import { AngularStudioClrLoginService } from '../../../../projects/angularstudio-clr-login/src/lib/angularstudio-clr-login.service';

@Component({
    selector: 'app-clr-login',
    templateUrl: './clr-login.component.html',
    styleUrls: [ './clr-login.component.scss' ]
})
export class ClrLoginComponent implements OnInit {

    public constructor(private readonly loginService: AngularStudioClrLoginService) {

        loginService.init({

            title: 'Enterprise Account Login',
            logo: '/assets/gfx/logo-full-transparent.png'

        });

    }

    ngOnInit(): void {
    }

}
