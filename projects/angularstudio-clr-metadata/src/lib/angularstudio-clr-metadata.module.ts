import { NgModule, ModuleWithProviders } from '@angular/core';
import { AngularStudioClrMetadataComponent } from './angularstudio-clr-metadata.component';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularStudioClrMetadataFieldComponent } from './angularstudio-clr-metadata-field/angularstudio-clr-metadata-field.component';
import { AngularStudioClrMetadataModuleConfig } from './angularstudio-clr-metadata-module-config';
import { HttpClientModule } from '@angular/common/http';


@NgModule({

    declarations: [

        AngularStudioClrMetadataComponent,
        AngularStudioClrMetadataFieldComponent

    ],

    imports: [

        CommonModule,
        ClarityModule,
        HttpClientModule,
        ReactiveFormsModule

    ],

    exports: [

        AngularStudioClrMetadataComponent

    ],

    entryComponents: [

        AngularStudioClrMetadataComponent

    ]

})
export class AngularStudioClrMetadataModule {

    public static forRoot(config: AngularStudioClrMetadataModuleConfig): ModuleWithProviders<AngularStudioClrMetadataModule> {

        return {

            ngModule: AngularStudioClrMetadataModule,

            providers: [

                {

                    provide: 'METADATA_CONFIG',
                    useValue: config

                }

            ]

        };

    }
}
