import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AngularStudioClrMetadataConfig } from '../angularstudio-clr-metadata-config';
import { AngularStudioClrMetadataService } from '../angularstudio-clr-metadata.service';
import { AngularStudioClrMetadataConfigFieldLabel } from '../angularstudio-clr-metadata-config-field-label';
import { AngularStudioClrMetadataConfigFieldValue } from '../angularstudio-clr-metadata-config-field-value';

@Component({

    selector: 'angularstudio-clr-metadata-field',
    templateUrl: './angularstudio-clr-metadata-field.component.html'

})
export class AngularStudioClrMetadataFieldComponent implements OnInit, AfterViewInit {

    @ViewChild('input') private input: ElementRef;

    @Input() public i: number;
    @Input() public name: string;
    @Input() public controlName: string;
    @Input() public sensitive;
    @Input() public config: AngularStudioClrMetadataConfig;
    @Input() public field: AngularStudioClrMetadataConfigFieldLabel | AngularStudioClrMetadataConfigFieldValue;
    @Input() public control: AbstractControl;

    public editing: boolean = true;
    public styleTextDecoration: string;
    public styleTextDecorationStyle: string;

    public constructor(public readonly metadataService: AngularStudioClrMetadataService<any>,
                       private readonly changeDetector: ChangeDetectorRef) {

    }

    public ngAfterViewInit() {
        //
        // if (this.control.value.length === 0) {
        //     this.changeDetector.detach();
        //     this.editing = true;
        //
        //     setTimeout(() => {
        //
        //         setTimeout(() => this.changeDetector.reattach());
        //
        //     }, 2000);
        // }

        // if (this.input) {
        //
        //     setTimeout(() => this.input.nativeElement.focus(), 500);
        //
        // }

        if (this.input && this.field.focus) {

            this.input.nativeElement.focus();

        }

    }

    public ngOnInit(): void {

        this.control = this.metadataService.formGroups[ this.name ][ this.i ].get(this.controlName);

        if (this.field.wavy) {

            this.styleTextDecoration = 'underline';
            this.styleTextDecorationStyle = 'dotted';

        }

        this.editing = this.field.editing;

    }

    public onSaveClick(): void {

        if (this.control.valid) {

            this.editing = false;

            this.metadataService.save(this.name);

        }

    }

}
