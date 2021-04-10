import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({

    selector: 'angularstudio-clr-form-field-editable',
    templateUrl: './angularstudio-clr-form-field-editable.component.html',
    styleUrls: [ './angularstudio-clr-form-field-editable.component.scss' ]

})
export class AngularstudioClrFormFieldEditableComponent implements OnInit {

    @Input() public label: any;
    @Input() public value: any;
    @Input() public wavy: boolean;
    @Input() public formControl: FormControl;

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
