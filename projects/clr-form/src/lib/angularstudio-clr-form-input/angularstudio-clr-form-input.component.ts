import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularStudioClrFormConfigField } from '../angularstudio-clr-form-config-field';

@Component({

    selector: 'angularstudio-clr-form-input',
    templateUrl: './angularstudio-clr-form-input.component.html',
    styleUrls: [ './angularstudio-clr-form-input.component.scss' ]

})
export class AngularstudioClrFormInputComponent implements OnInit {

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
