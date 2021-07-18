import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularStudioClrFormConfigField } from '../angularstudio-clr-form-config-field';
import { AngularStudioClrFormService } from '../angularstudio-clr-form.service';

@Component({

    selector: 'angularstudio-clr-form-input',
    templateUrl: './angularstudio-clr-form-input.component.html',
    styleUrls: [ './angularstudio-clr-form-input.component.scss' ]

})
export class AngularstudioClrFormInputComponent implements OnInit {

    @Input() public name: string;
    @Input() public config: AngularStudioClrFormConfigField<any>;
    @Input() public field: AngularStudioClrFormConfigField<any>;
    @Input() public control: FormControl;

    public editing: boolean = true;
    public styleTextDecoration: string;
    public styleTextDecorationStyle: string;

    public constructor(public readonly formService: AngularStudioClrFormService<any>) {

    }

    public ngOnInit(): void {

        if (this.field.wavy) {

            this.styleTextDecoration = 'underline';
            this.styleTextDecorationStyle = 'dotted';

        }

        this.editing = this.field.editing;

    }

    public onSaveClick(): void {

        if (this.control.valid) {

            this.editing = false;

            this.formService.save(this.name);

            this.formService.fieldChange$.next({

                form: this.name,
                name: this.field.name,
                value: this.control.value

            });

        }

    }

}
