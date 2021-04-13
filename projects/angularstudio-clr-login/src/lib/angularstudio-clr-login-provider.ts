export enum AngularstudioClrLoginProvider {

    GOOGLE = 'GOOGLE',
    GITHUB = 'GITHUB',
    FACEBOOK = 'FACEBOOK'

}

export interface AngularstudioClrLoginProviderConfig {

    name: string;
    label: string;
    icon: string;
    class: string;
    disabled?: boolean;

}

export const getLoginProvider = (provider: AngularstudioClrLoginProvider): AngularstudioClrLoginProviderConfig => {

    if (provider === AngularstudioClrLoginProvider.GOOGLE) {

        return {

            name: 'google',
            label: 'Google',
            icon: 'fab fa-google',
            class: 'btn btn-primary-outline',
            disabled: true

        };

    } else if (provider === AngularstudioClrLoginProvider.GITHUB) {

        return {

            name: 'github',
            label: 'GitHub',
            icon: 'fab fa-github',
            class: 'btn btn-primary-outline',
            disabled: true

        };

    } else if (provider === AngularstudioClrLoginProvider.FACEBOOK) {

        return {

            name: 'facebook',
            label: 'Facebook',
            icon: 'fab fa-facebook',
            class: 'btn btn-primary-outline',
            disabled: true

        };

    }

};
