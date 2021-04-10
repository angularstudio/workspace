import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularStudioClrManagerModule } from '../../projects/clr-manager/src/lib/angular-studio-clr-manager.module';
import { ManagerComponent } from './manager/manager.component';
import { ChildComponent } from './manager/child/child.component';
import { ChildOneComponent } from './manager/child-one/child-one.component';
import { ChildTwoComponent } from './manager/child-two/child-two.component';
import { AngularStudioClrSearchModule } from '../../projects/clr-search/src/lib/angular-studio-clr-search.module';
import { ClrSearchComponent } from './clr-search/clr-search.component';
import { AngularstudioClrFormFieldEditableModule } from '../../projects/clr-form-field-editable/src/lib/angularstudio-clr-form-field-editable.module';
import { ClrFormEditableComponent } from './clr-form-editable/clr-form-editable.component';

@NgModule({

    declarations: [

        AppComponent,
        ManagerComponent,
        ChildComponent,
        ChildOneComponent,
        ChildTwoComponent,
        ClrSearchComponent,
        ClrFormEditableComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        RouterModule.forRoot([

            {

                path: 'manage',
                children: [

                    {

                        path: 'child-one',
                        component: ChildOneComponent

                    }, {

                        path: 'child-two',
                        component: ChildTwoComponent

                    }, {

                        path: 'search',
                        component: ClrSearchComponent

                    }, {

                        path: 'clr-form-editable',
                        component: ClrFormEditableComponent

                    }

                ]

            }

        ]),

        AngularStudioClrManagerModule,
        AngularStudioClrSearchModule,
        AngularstudioClrFormFieldEditableModule
        // BoardModule,
        // ButtonsModule,
        // CardModule,
        // ConfirmModule,
        // DatatableModule,
        // DialogModule,
        // PlansModule,
        // ToggleModule,
        // ToolbarModule,

    ],

    providers: [],

    bootstrap: [ AppComponent ],

    entryComponents: []

})
export class AppModule {
}
