export class AngularStudioChangePasswordConfig {

    public title?: string = 'Change Password';
    public message?: string = 'Enter a new password below.';
    public showCurrent?: boolean = true;

    public constructor(config: AngularStudioChangePasswordConfig) {

        Object.assign(this, config);

    }

}
