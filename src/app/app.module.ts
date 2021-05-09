import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DemoModule } from './demo/demo.module';

@NgModule({

    declarations: [

        AppComponent,
        AboutComponent,
        HomeComponent

    ],

    imports: [

        BrowserModule,
        BrowserAnimationsModule,
        ClarityModule,
        DemoModule,
        RouterModule.forRoot([

            {

                path: '',
                pathMatch: 'full',
                redirectTo: 'home'

            }, {

                path: 'home',
                component: HomeComponent

            }, {

                path: 'about',
                component: AboutComponent

            }

        ])

    ],

    providers: [],

    bootstrap: [ AppComponent ]

})
export class AppModule {
}
