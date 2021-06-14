import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularStudioAPIClientConfig } from './angularstudio-api-client-config';
import { AngularStudioAPIClientService } from './angularstudio-api-client-service';

@NgModule({

    imports: [

        CommonModule,
        HttpClientModule

    ]

})
export class AngularStudioAPIClientModule {

    public static forRoot(config: AngularStudioAPIClientConfig): ModuleWithProviders<AngularStudioAPIClientService<any>> {

        return {

            ngModule: AngularStudioAPIClientModule,

            providers: [

                {

                    provide: 'METADATA_CONFIG',
                    useValue: config

                },

                AngularStudioAPIClientService

            ]

        };

    }

}
