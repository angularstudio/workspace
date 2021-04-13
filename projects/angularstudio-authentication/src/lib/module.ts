import { NgModule, ModuleWithProviders } from '@angular/core';
import { Config } from './config';
import { AngularStudioAuthenticationService } from './service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

    imports: [

        HttpClientModule

    ]

})
export class AngularStudioAuthenticationModule {

    public static forRoot(config: Config): ModuleWithProviders<AngularStudioAuthenticationModule> {

        return {

            ngModule: AngularStudioAuthenticationModule,

            providers: [

                AngularStudioAuthenticationService,
                {

                    provide: 'AUTH_JWT_CONFIG',
                    useValue: config

                }

            ]

        };

    }

}
