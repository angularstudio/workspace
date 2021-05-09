import { Component, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Validators } from '@angular/forms';
import { AngularStudioClrMetadataService } from '../../../../projects/angularstudio-clr-metadata/src/lib/angularstudio-clr-metadata.service';

@Component({

    selector: 'app-clr-metadata',
    templateUrl: './clr-metadata.component.html',
    styleUrls: [ './clr-metadata.component.scss' ]

})
export class ClrMetadataComponent implements AfterViewInit {

    @ViewChild('metadata1', { read: ViewContainerRef }) view: ViewContainerRef;

    public constructor(private readonly metadataService: AngularStudioClrMetadataService<any>) {

    }

    public ngAfterViewInit(): void {

        this.metadataService.init({

            name: 'one',
            rootViewContainer: this.view,
            editing: false,

            fields: [

                {

                    name: 'var1',

                    label: {

                        value: 'DB_HOSTNAME',
                        validators: [ Validators.required, Validators.minLength(3) ]

                    },

                    value: {

                        value: 'localhost',
                        validators: [ Validators.required, Validators.minLength(3) ]

                    }

                }, {

                    name: 'var2',

                    label: {

                        value: 'DB_USERNAME',
                        validators: [ Validators.required, Validators.minLength(3) ],
                        helper: 'Some help message..'

                    },

                    value: {

                        value: 'mysql',
                        validators: [ Validators.required, Validators.minLength(3) ],
                        helper: 'Some help message..'

                    }

                }, {

                    name: 'var3',

                    label: {

                        value: 'DB_PASSWORD',
                        validators: [ Validators.required, Validators.minLength(3) ],
                        helper: 'Some help message..'

                    },

                    value: {

                        value: 'supersecret',
                        validators: [ Validators.required, Validators.minLength(3) ],
                        helper: 'Some help message..'

                    }

                }

            ]

        });

        this.metadataService.value$.subscribe(v => {

            console.log(v);

        });

        this.metadataService.save$.subscribe(v => {

            console.log(v);

        });

    }

}
