import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-clr-form-editable',
    templateUrl: './clr-form-editable.component.html',
    styleUrls: [ './clr-form-editable.component.scss' ]
})
export class ClrFormEditableComponent {

    public formGroup = new FormGroup({

        name: new FormControl('John')

    });

    public constructor() {

    }

    public onSave(value: string): void {

        console.log(value);

    }

}
