import { DialogModule }            from '@angular.studio/dialog';
import { ToggleModule }            from '@angular.studio/toggle';
import { ToolbarModule }           from '@angular.studio/toolbar';
import { NgModule }                from '@angular/core';
import { FlexLayoutModule }        from '@angular/flex-layout';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';
import { BoardModule }             from '../../projects/board/src/lib/board.module';
import { CardModule }              from '../../projects/card/src/lib/card.module';
import { AppComponent }            from './app.component';
import { DemoDialogComponent }     from './demo-dialog/demo-dialog.component';

@NgModule({

    declarations: [

        AppComponent,

        DemoDialogComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        RouterModule.forRoot([]),

        BoardModule,
        CardModule,
        DialogModule,
        ToggleModule,
        ToolbarModule,

    ],

    providers: [],

    bootstrap: [ AppComponent ],

    entryComponents: [

        DemoDialogComponent
    ]

})
export class AppModule {
}
