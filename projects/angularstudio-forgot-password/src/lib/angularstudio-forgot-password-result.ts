import { AngularStudioForgotPasswordEvent } from './angularstudio-forgot-password-event';

export interface AngularStudioForgotPasswordResult {

    event: AngularStudioForgotPasswordEvent;
    result: boolean;
    email?: string;

}
