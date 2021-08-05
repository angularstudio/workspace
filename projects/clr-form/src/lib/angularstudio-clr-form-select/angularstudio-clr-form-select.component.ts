import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularStudioClrFormConfigField } from '../angularstudio-clr-form-config-field';
import { AngularStudioClrFormService } from '../angularstudio-clr-form.service';

@Component({

    selector: 'angularstudio-clr-form-select',
    templateUrl: './angularstudio-clr-form-select.component.html',
    styleUrls: [ './angularstudio-clr-form-select.component.scss' ]

})
export class AngularStudioClrFormSelectComponent implements OnInit {

    @Input() public name: string;
    @Input() public control: FormControl;
    @Input() public field: AngularStudioClrFormConfigField<any>;

    public editing: boolean = true;
    public styleTextDecoration: string;
    public styleTextDecorationStyle: string;

    public label: string;

    public constructor(public readonly formService: AngularStudioClrFormService<any>) {

    }

    public ngOnInit(): void {

        if (this.field.wavy) {

            this.styleTextDecoration = 'underline';
            this.styleTextDecorationStyle = 'dotted';

        }

        this.label = this.field.data.find(d => d.value === this.field.value).label;

        this.editing = this.field.editing;

    }

    public onSaveClick(): void {

        this.editing = false;

        this.formService.save(this.name);

        this.formService.config[ this.name ].fieldChange$.next({

            form: this.name,
            name: this.field.name,
            value: this.control.value

        });

    }

}
