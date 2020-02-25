import { BoardButtonModule }       from '@angular.studio/board-button';
import { StudioButtonModule }      from '@angular.studio/button';
import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }            from '@angular/router';
import { BoardModule }             from '../../projects/board/src/lib/board.module';
import { AppComponent }            from './app.component';

@NgModule({

    declarations: [

        AppComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,

        BoardModule,
        BoardButtonModule,

        RouterModule.forRoot([]),

        StudioButtonModule

    ],

    providers: [],

    bootstrap: [ AppComponent ]

})
export class AppModule {
}
