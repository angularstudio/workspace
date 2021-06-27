import { AbstractControl } from '@angular/forms';

export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const emailMultipleValidator = (controlName: string) => {

    return (control: AbstractControl): { [ key: string ]: any } | null => {

        const split = control.value.split("\n");

        for (let i = 0; i < split.length; i++) {

            if (split[ i ].match(emailRegex)) {

                return { emailMultiple: true };

            }

        }

    };

};
