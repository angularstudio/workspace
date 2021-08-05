export class AngularStudioForgotPasswordConfig {

    public title?: string = 'Forgot Password';
    public message?: string = 'Enter your email address below. You will receive an email in a few moments if found.';

    public constructor(config: AngularStudioForgotPasswordConfig) {

        Object.assign(this, config);

    }

}
