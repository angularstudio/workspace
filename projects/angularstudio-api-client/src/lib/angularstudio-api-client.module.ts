import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
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

    public static forRoot(config: AngularStudioAPIClientConfig): ModuleWithProviders<AngularStudioAPIClientModule> {

        return {

            ngModule: AngularStudioAPIClientModule,

            providers: [

                AngularStudioAPIClientService,

                {

                    provide: API_CLIENT_CONFIG,
                    useValue: config

                }

            ]

        };

    }

}
