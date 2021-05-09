import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { AngularStudioClrMetadataService } from './angularstudio-clr-metadata.service';
import { AngularStudioClrMetadataConfigField } from './angularstudio-clr-metadata-config-field';
import { FormGroup } from '@angular/forms';

@Component({

    selector: 'angularstudio-clr-metadata',
    templateUrl: './angularstudio-clr-metadata.component.html',
    styleUrls: [ './angularstudio-clr-metadata.component.scss' ],
    encapsulation: ViewEncapsulation.None

})
export class AngularStudioClrMetadataComponent implements OnInit {

    public name: string;
    public formGroup: FormGroup;

    public constructor(private readonly changeDetector: ChangeDetectorRef,
                       public readonly metadataService: AngularStudioClrMetadataService<any>) {

        changeDetector.detach();

        setTimeout(() => changeDetector.reattach());

    }

    public ngOnInit(): void {

    }

    public onSensitiveClick(field: AngularStudioClrMetadataConfigField, value: boolean): void {

        field.sensitive = value;

        this.metadataService.save(this.name);

    }

    public onDeleteClick(field: AngularStudioClrMetadataConfigField): void {

        this.metadataService.deleteField(this.name, field);

    }

}
