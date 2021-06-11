import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { AngularStudioClrFormService } from '../../../../projects/clr-form/src/lib/angularstudio-clr-form.service';
import { Validators } from '@angular/forms';

@Component({
    selector: 'app-clr-form',
    templateUrl: './clr-form.component.html',
    styleUrls: [ './clr-form.component.scss' ]
})
export class ClrFormComponent implements AfterViewInit {

    @ViewChild('form1', { read: ViewContainerRef }) view: ViewContainerRef;

    public constructor(private readonly formService: AngularStudioClrFormService<any>) {

    }

    public ngAfterViewInit(): void {

        this.formService.init({

            name: 'one',
            width: '500px',
            rootViewContainer: this.view,

            fields: [

                {

                    name: 'firstName',
                    label: '1First Name',
                    description: 'asdf asd fas dfas dfa sdf asdf.',
                    placeholder: 'Enter your first name..',
                    type: 'text',
                    value: 'John',
                    validators: [ Validators.required, Validators.minLength(3) ],
                    helper: 'Some help message..'

                }, {

                    name: 'lastName',
                    label: 'Last Name',
                    description: 'asdf asd fas dfas dfa sdf asdf.',
                    type: 'text',
                    value: 'Doe',
                    validators: [ Validators.required, Validators.minLength(3) ]

                }, {

                    name: 'textarea',
                    label: 'Textarea',
                    description: 'asdf asd fas dfas dfa sdf asdf.',
                    type: 'textarea',
                    value: 'asdf as dfasd f asd fa sdf asdf',
                    validators: [ Validators.required, Validators.minLength(3) ]

                }, {

                    name: 'select',
                    label: 'Select Dropdown',
                    description: 'asdf asd fas dfas dfa sdf asdf.',
                    type: 'select',
                    value: 'apple',
                    data: [ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' } ],
                    validators: [ Validators.required, Validators.minLength(3) ]

                }, {

                    name: 'checkbox',
                    label: 'Checkbox',
                    description: 'asdf asd fas dfas dfa sdf asdf.',
                    type: 'checkbox',
                    value: [ { label: 'Orange', value: 'orange' } ],
                    data: [ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' } ],
                    validators: []

                }, {

                    name: 'range',
                    label: 'Some Range',
                    description: 'asdf asd fas dfas dfa sdf asdf.',
                    type: 'range',
                    value: 50,
                    min: 1,
                    max: 100

                }

            ]

        });

        this.formService.init({

            name: 'one',
            width: '500px',
            rootViewContainer: this.view,

            fields: [

                {

                    name: 'firstName',
                    label: 'Firasdfst Name',
                    description: 'asdf asd fas dfas dfa sdf asdf.',
                    placeholder: 'Enter your first name..',
                    type: 'text',
                    value: 'John',
                    validators: [ Validators.required, Validators.minLength(3) ],
                    helper: 'Some help message..'

                }, {

                    name: 'asdf',
                    label: 'Lasdfast Name',
                    description: 'asdf asd fas dfas dfa sdf asdf.',
                    type: 'text',
                    value: 'Doe',
                    validators: [ Validators.required, Validators.minLength(3) ]

                }, {

                    name: 'textarea',
                    label: 'Textarea',
                    description: 'asdf asd fas dfas dfa sdf asdf.',
                    type: 'textarea',
                    value: 'asdf as dfasd f asd fa sdf asdf',
                    validators: [ Validators.required, Validators.minLength(3) ]

                }, {

                    name: 'select',
                    label: 'Select Dropdown',
                    description: 'asdf asd fas dfas dfa sdf asdf.',
                    type: 'select',
                    value: 'apple',
                    data: [ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' } ],
                    validators: [ Validators.required, Validators.minLength(3) ]

                }, {

                    name: 'checkbox',
                    label: 'Checkbox',
                    description: 'asdf asd fas dfas dfa sdf asdf.',
                    type: 'checkbox',
                    value: [ { label: 'Orange', value: 'orange' } ],
                    data: [ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' } ],
                    validators: []

                }, {

                    name: 'range',
                    label: 'Some Range',
                    description: 'asdf asd fas dfas dfa sdf asdf.',
                    type: 'range',
                    value: 50,
                    min: 1,
                    max: 100

                }

            ]

        });

        this.formService.value$.subscribe(v => {

            console.log(v);

        });

        this.formService.save$.subscribe(v => {

            console.log(v);

        });

    }

}
