import { AbstractControl } from '@angular/forms';

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const emailMultipleValidator = () => {

    return (control: AbstractControl): { [ key: string ]: any } | null => {

        const split = control.value.trim().split("\n");

        for (let i = 0; i < split.length; i++) {

            if (split[ i ].length > 0 && !split[ i ].match(emailRegex)) {

                return { emailMultiple: true };

            }

        }

        return null;

    };

};
