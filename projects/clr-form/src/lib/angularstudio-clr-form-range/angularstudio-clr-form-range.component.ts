import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularStudioClrFormConfigField } from '../angularstudio-clr-form-config-field';
import { FormControl } from '@angular/forms';
import { AngularStudioClrFormService } from '../angularstudio-clr-form.service';

@Component({
    selector: 'angularstudio-clr-form-range',
    templateUrl: './angularstudio-clr-form-range.component.html',
    styleUrls: [ './angularstudio-clr-form-range.component.scss' ]
})
export class AngularStudioClrFormRangeComponent implements OnInit {

    @Input() public name: string;
    @Input() public config: AngularStudioClrFormConfigField<any>;
    @Input() public field: AngularStudioClrFormConfigField<any>;
    @Input() public control: FormControl;

    public editing: boolean = true;
    public styleTextDecoration: string;
    public styleTextDecorationStyle: string;

    public value: number = 0;
    public options = {

        floor: 0,
        ceil: 1

    };

    public constructor(public readonly formService: AngularStudioClrFormService<any>,
                       private readonly changeDetectorRef: ChangeDetectorRef) {


    }

    public ngOnInit(): void {

        this.changeDetectorRef.detectChanges();

        if (this.field.wavy) {

            this.styleTextDecoration = 'underline';
            this.styleTextDecorationStyle = 'dotted';

        }

        this.value = this.field.value;
        this.options = { floor: this.field.min, ceil: this.field.max };

        this.editing = this.field.editing;

    }

    public onValueChange(e: any): void {

        console.log(e);
    }

    public onSaveClick(): void {

        if (this.control.valid) {

            this.editing = false;

            this.formService.save(this.name);

        }

    }

}
