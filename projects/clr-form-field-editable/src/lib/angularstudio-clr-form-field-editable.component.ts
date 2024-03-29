import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({

    selector: 'angularstudio-clr-form-field-editable',
    templateUrl: './angularstudio-clr-form-field-editable.component.html',
    styleUrls: [ './angularstudio-clr-form-field-editable.component.scss' ],
    encapsulation: ViewEncapsulation.None

})
export class AngularStudioClrFormFieldEditableComponent implements OnInit {

    @Input() public label: any;
    @Input() public value: any;
    @Input() public wavy: boolean;
    @Input() public formControl: FormControl;
    @Input() public formControlName: string;
    @Input() public formGroup: FormGroup;

    @Output() public onSave: EventEmitter<string> = new EventEmitter();

    public editing: boolean;
    public styleTextDecoration: string;
    public styleTextDecorationStyle: string;

    public constructor() {

    }

    public ngOnInit(): void {

        if (this.wavy) {

            this.styleTextDecoration = 'underline';
            this.styleTextDecorationStyle = 'dotted';

        }

    }

    public onSaveClick(): void {

        this.editing = false;

        this.onSave.emit(this.formControl.value);

    }

}
