import { NgModule } from '@angular/core';
import { AngularStudioClrSearchComponent } from './angular-studio-clr-search.component';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DetailPaneComponent } from './detail-pane/detail-pane.component';
import { AngularStudioClrSearchValueFilterComponent } from './filters/angular-studio-clr-search-value-filter/angular-studio-clr-search-value-filter.component';

@NgModule({
    declarations: [

        AngularStudioClrSearchComponent,
        DetailPaneComponent,
        AngularStudioClrSearchValueFilterComponent

    ],

    imports: [

        CommonModule,
        ClarityModule,
        ReactiveFormsModule,
        RouterModule

    ],

    exports: [

        AngularStudioClrSearchComponent

    ],

    entryComponents: [

        AngularStudioClrSearchComponent

    ]

})
export class AngularStudioClrSearchModule {
}
