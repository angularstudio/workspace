import { AngularStudioChangePasswordEvent } from './angularstudio-change-password-event';

export interface AngularStudioChangePasswordResult {

    event: AngularStudioChangePasswordEvent;
    result: boolean;
    password?: string;

}
