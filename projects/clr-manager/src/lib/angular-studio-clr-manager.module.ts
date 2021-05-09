import { NgModule } from '@angular/core';
import { AngularStudioClrManagerComponent } from './angular-studio-clr-manager.component';
import { ClarityModule } from '@clr/angular';
import { HeaderComponent } from './header/header.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { SideNavComponent } from './side-nav/side-nav.component';


@NgModule({

    declarations: [

        AngularStudioClrManagerComponent,
        HeaderComponent,
        SubNavComponent,
        ContentComponent,
        SideNavComponent

    ],

    imports: [

        CommonModule,
        RouterModule.forChild([]),
        ClarityModule

    ],

    exports: [

        AngularStudioClrManagerComponent
    ]

})
export class AngularStudioClrManagerModule {
}
