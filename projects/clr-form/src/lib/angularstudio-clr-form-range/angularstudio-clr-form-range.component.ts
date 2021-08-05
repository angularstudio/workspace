import { Component, OnInit, Input, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { AngularStudioClrFormConfigField } from '../angularstudio-clr-form-config-field';
import { FormControl } from '@angular/forms';
import { AngularStudioClrFormService } from '../angularstudio-clr-form.service';

@Component({
    selector: 'angularstudio-clr-form-range',
    templateUrl: './angularstudio-clr-form-range.component.html',
    styleUrls: [ './angularstudio-clr-form-range.component.scss' ]
})
export class AngularStudioClrFormRangeComponent implements OnInit, AfterContentChecked {

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

        if (this.field.wavy) {

            this.styleTextDecoration = 'underline';
            this.styleTextDecorationStyle = 'dotted';

        }

        this.value = this.field.value;
        this.options = { floor: this.field.min, ceil: this.field.max };

        this.editing = this.field.editing;

    }

    public ngAfterContentChecked() {

        this.changeDetectorRef.detectChanges();

    }

    public onEditClick() {

        // this.changeDetectorRef.detach();
        this.editing = true;
        // this.changeDetectorRef.reattach();

    }

    public onValueChange(e: any): void {

        console.log(e);
    }

    public onSaveClick(): void {

        if (this.control.valid) {

            this.editing = false;

            this.formService.save(this.name);

            this.formService.config[ this.name ].fieldChange$.next({

                form: this.name,
                name: this.field.name,
                value: this.control.value

            });

        }

    }

}
