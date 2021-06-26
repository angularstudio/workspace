import { ValidatorFn, FormGroup } from '@angular/forms';

export const checkMatching: ValidatorFn = (fg: FormGroup) => {

    const n = fg.get('new').value;
    const c = fg.get('confirm').value;

    if (n !== '' && c !== '' && n !== c) {

        return { match: true };

    }

};

export const checkNotSame: ValidatorFn = (fg: FormGroup) => {

    const current = fg.get('current').value;
    const newp = fg.get('new').value;

    if (current !== '' && newp !== '' && current === newp) {

        return { same: true };

    }

};

