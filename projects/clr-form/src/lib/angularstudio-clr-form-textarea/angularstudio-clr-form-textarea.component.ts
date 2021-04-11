import { Component, OnInit, Input } from '@angular/core';
import { AngularStudioClrFormConfigField } from '../angularstudio-clr-form-config-field';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'angularstudio-clr-form-textarea',
    templateUrl: './angularstudio-clr-form-textarea.component.html',
    styleUrls: [ './angularstudio-clr-form-textarea.component.css' ]
})
export class AngularStudioClrFormTextareaComponent implements OnInit {

    @Input() public field: AngularStudioClrFormConfigField<any>;
    @Input() public control: FormControl;

    public editing: boolean = true;
    public styleTextDecoration: string;
    public styleTextDecorationStyle: string;

    public ngOnInit(): void {

        if (this.field.wavy) {

            this.styleTextDecoration = 'underline';
            this.styleTextDecorationStyle = 'dotted';

        }

        this.editing = this.field.editing;

    }

    public onSaveClick(): void {

        this.editing = false;

    }
}
