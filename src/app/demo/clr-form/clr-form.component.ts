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
                    placeholder: 'Enter your first name..',
                    type: 'text',
                    value: 'John',
                    validators: [ Validators.required, Validators.minLength(3) ],
                    helper: 'Some help message..'

                }, {

                    name: 'lastName',
                    label: 'Last Name',
                    type: 'text',
                    value: 'Doe',
                    validators: [ Validators.required, Validators.minLength(3) ]

                }, {

                    name: 'textarea',
                    label: 'Textarea',
                    type: 'textarea',
                    value: 'asdf as dfasd f asd fa sdf asdf',
                    validators: [ Validators.required, Validators.minLength(3) ]

                }, {

                    name: 'select',
                    label: 'Select Dropdown',
                    type: 'select',
                    value: 'apple',
                    data: [ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' } ],
                    validators: [ Validators.required, Validators.minLength(3) ]

                }, {

                    name: 'checkbox',
                    label: 'Checkbox',
                    type: 'checkbox',
                    value: [ { label: 'Orange', value: 'orange' } ],
                    data: [ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' } ],
                    validators: []

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
                    placeholder: 'Enter your first name..',
                    type: 'text',
                    value: 'John',
                    validators: [ Validators.required, Validators.minLength(3) ],
                    helper: 'Some help message..'

                }, {

                    name: 'asdf',
                    label: 'Lasdfast Name',
                    type: 'text',
                    value: 'Doe',
                    validators: [ Validators.required, Validators.minLength(3) ]

                }, {

                    name: 'textarea',
                    label: 'Textarea',
                    type: 'textarea',
                    value: 'asdf as dfasd f asd fa sdf asdf',
                    validators: [ Validators.required, Validators.minLength(3) ]

                }, {

                    name: 'select',
                    label: 'Select Dropdown',
                    type: 'select',
                    value: 'apple',
                    data: [ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' } ],
                    validators: [ Validators.required, Validators.minLength(3) ]

                }, {

                    name: 'checkbox',
                    label: 'Checkbox',
                    type: 'checkbox',
                    value: [ { label: 'Orange', value: 'orange' } ],
                    data: [ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' } ],
                    validators: []

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
