import {
    getLoginProvider,
    AngularstudioClrLoginProvider,
    AngularstudioClrLoginProviderConfig
} from './angularstudio-clr-login-provider';

export class AngularStudioClrLoginConfig {

    public logo?: string;
    public subtitle?: string = 'Welcome back!';
    public title?: string = 'Login';
    public defaults?: { email: string };
    public providers?: Array<AngularstudioClrLoginProviderConfig> = [];

    public constructor(config: AngularStudioClrLoginConfig) {

        if (config.providers) {

            for (let i = 0; i < config.providers.length; i++) {

                this.providers.push(config.providers[ i ]);

            }

        } else {

            this.providers = [

                getLoginProvider(AngularstudioClrLoginProvider.FACEBOOK),
                getLoginProvider(AngularstudioClrLoginProvider.GOOGLE),
                getLoginProvider(AngularstudioClrLoginProvider.GITHUB)

            ];

        }

        Object.assign(this, config);

    }

}
