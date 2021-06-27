import { ValidatorFn, FormGroup } from '@angular/forms';

export const checkMatching: ValidatorFn = (fg: FormGroup) => {

    const n = fg.get('new').value;
    const c = fg.get('confirm').value;

    if (n !== '' && c !== '' && n !== c) {

        return { match: true };

    }

};
