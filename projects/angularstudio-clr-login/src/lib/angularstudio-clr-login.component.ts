import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularStudioClrLoginService } from './angularstudio-clr-login.service';

@Component({

    selector: 'angularstudio-clr-login',
    templateUrl: './angularstudio-clr-login.component.html',
    styleUrls: [ './angularstudio-clr-login.component.scss' ]

})
export class AngularStudioClrLoginComponent {

    public formGroup = new FormGroup({

        email: new FormControl('', Validators.email),
        password: new FormControl('', [

            Validators.minLength(8),
            Validators.maxLength(255)

        ]),
        remember: new FormControl()

    });

    public constructor(public readonly loginService: AngularStudioClrLoginService) {

        loginService.defaults$.subscribe(defaults => {

            console.log(defaults);
            this.formGroup.get('email').setValue(defaults.email);

        });

    }

    public onSubmit(): void {

        this.loginService.events$.next(this.formGroup.value);

    }

}
