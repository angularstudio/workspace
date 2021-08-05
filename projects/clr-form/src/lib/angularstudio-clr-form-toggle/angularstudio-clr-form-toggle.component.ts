import { Component, OnInit, Input } from '@angular/core';
import { AngularStudioClrFormConfigField } from '../angularstudio-clr-form-config-field';
import { FormControl } from '@angular/forms';
import { AngularStudioClrFormService } from '../angularstudio-clr-form.service';

@Component({
    selector: 'angularstudio-clr-form-toggle',
    templateUrl: './angularstudio-clr-form-toggle.component.html',
    styleUrls: [ './angularstudio-clr-form-toggle.component.scss' ]
})
export class AngularstudioClrFormToggleComponent implements OnInit {

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

            this.formService.config[ this.name ].fieldChange$.next({

                form: this.name,
                name: this.field.name,
                value: this.control.value

            });

        }

    }

}
