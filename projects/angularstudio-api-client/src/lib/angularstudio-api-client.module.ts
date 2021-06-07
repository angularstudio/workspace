import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularstudioApiClient } from './APIClient';
import { AngularstudioAPIClientConfig } from './angularstudio-api-client-config';


@NgModule({

    imports: [

        CommonModule,
        HttpClientModule

    ],

    exports: [

        AngularstudioApiClient

    ]

})
export class AngularstudioAPIClientModule {

    public static forRoot(config: AngularstudioAPIClientConfig): ModuleWithProviders<AngularstudioAPIClientModule> {

        return {

            ngModule: AngularstudioAPIClientModule,

            providers: [

                {

                    provide: 'METADATA_CONFIG',
                    useValue: config

                }

            ]

        };

    }

}
