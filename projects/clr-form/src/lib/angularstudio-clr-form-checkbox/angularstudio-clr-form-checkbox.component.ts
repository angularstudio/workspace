import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularStudioClrFormConfigField } from '../angularstudio-clr-form-config-field';

@Component({
    selector: 'angularstudio-clr-form-checkbox',
    templateUrl: './angularstudio-clr-form-checkbox.component.html',
    styleUrls: [ './angularstudio-clr-form-checkbox.component.css' ]
})
export class AngularStudioClrFormCheckboxComponent implements OnInit {

    @Input() public control: FormControl;

    @Input() public field: AngularStudioClrFormConfigField<any>;

    public editing: boolean = true;
    public styleTextDecoration: string;
    public styleTextDecorationStyle: string;
    public value: string;
    public checks: Array<any> = [];
    public checked: any = {};
    public label: string;

    public ngOnInit(): void {

        if (this.field.wavy) {

            this.styleTextDecoration = 'underline';
            this.styleTextDecorationStyle = 'dotted';

        }

        this.checks = this.field.value;

        this.field.value.forEach(check => this.checked[ check.value ] = true);

        this.updateValue();

        this.editing = this.field.editing;

    }

    public onSaveClick(): void {

        this.editing = false;

    }

    public onChange(option: any, checked: boolean): void {

        if (checked) {

            this.checks.push(option);

        } else {

            this.checks = this.checks.filter(o => option.value != o.value);

        }

        this.control.setValue(this.checks);

        this.updateValue();

    }

    private updateValue(): void {

        this.value = this.checks.map(check => check.label).join(', ');

    }

}
