import { DialogConfig, DialogService } from '@angular.studio/dialog';
import { Toolbar }                     from '@angular.studio/toolbar';
import { Component, OnInit }           from '@angular/core';
import { Board }                       from '../../projects/board/src/lib/board';
import { Card }                        from '../../projects/card/src/lib/card';
import { DemoDialogComponent }         from './demo-dialog/demo-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

    public board: Board = {

        backgroundColor: '#000',
        borderTopColor: '#111',

        bottomButtons: [ {

            backgroundColor: '#32e666',
            iconClass: 'fad fa-home',
            label: 'Button 1',
            routerPath: '/some/path'

        }, {

            backgroundColor: '#6265ee',
            iconClass: 'fad fa-home',
            label: 'Button 2',
            routerPath: '/some/path'

        } ],
        width: '220px',

        buttons: [

            {

                backgroundColor: '#222',
                borderColor: 'red',
                fontColor: 'green',
                iconClass: 'fad fa-home',
                iconColor: '#AE89FD',
                iconFontSize: '17px',
                label: 'Home',
                labelFontSize: '14px',
                labelFontColor: '#AE89FD',
                routerPath: '/home',
                tooltip: 'Go Home!',
                width: '177px'

            }, {

                backgroundColor: '#222',
                borderColor: 'red',
                fontColor: 'green',
                iconClass: 'fad fa-camera',
                iconColor: '#F5D000',
                iconFontSize: '17px',
                label: 'Cameras',
                labelFontSize: '14px',
                labelFontColor: '#F5D000',
                tooltip: 'Go Home!',
                width: '75px'

            }, {

                backgroundColor: '#222',
                borderColor: 'red',
                fontColor: 'green',
                iconClass: 'fad fa-user',
                iconColor: '#32e666',
                iconFontSize: '17px',
                label: 'Profile',
                labelFontSize: '14px',
                labelFontColor: '#32e666',
                tooltip: 'Go Home!',
                width: '75px'

            }, {

                backgroundColor: '#222',
                borderColor: 'red',
                fontColor: 'green',
                iconClass: 'fad fa-home',
                iconColor: '#e45bfd',
                iconFontSize: '17px',
                label: 'Profile',
                labelFontSize: '14px',
                labelFontColor: '#e45bfd',
                tooltip: 'Go Home!',
                width: '75px'

            }, {

                backgroundColor: '#222',
                borderColor: 'red',
                fontColor: 'green',
                iconClass: 'fad fa-cog',
                iconColor: '#888',
                iconFontSize: '17px',
                label: 'Settings',
                labelFontSize: '14px',
                labelFontColor: '#888',
                tooltip: 'Go Home!',
                width: '75px'

            }

        ]

    };

    public toolbar: Toolbar = {

        backgroundColor: '#000',
        direction: 'horizontal',
        menuClass: 'toolbar-menu',
        menuIconClass: 'fad fa-user',
        menuIconColor: '#e45bfd',
        menuIconFontSize: '20px',
        menuItems: [ {

            iconClass: 'fad fa-user',
            iconColor: 'rebeccapurple',
            label: 'My Profile',
            labelColor: '#999',
            routerPath: '/profile'

        } ]

    };

    public card: Card = {

        backgroundColor: '#111',
        label: 'Wall St. NYC',
        labelColor: '#999',
        labelFontSize: '11px',
        width: '200px',
        height: '100px',
        imageUrl: 'https://5f28cb8c-f9e7-4714-8f0d-1db1fc982e5f.ingress.streamnvr.com/images/latest/screenshot_128x72.jpeg?r=1582692827226',
        menuClass: 'toolbar-menu',
        menuIconClass: 'fad fa-user',
        menuIconColor: '#e45bfd',
        menuIconFontSize: '20px',
        menuItems: [ {

            iconClass: 'fad fa-user',
            iconColor: 'rebeccapurple',
            label: 'My Profile',
            labelColor: '#999',
            routerPath: '/profile'

        } ]

    };

    public constructor(private readonly dialogService: DialogService) {

    }

    public ngOnInit(): void {

        this.dialogService.open(DemoDialogComponent, new DialogConfig({

            id: 'demo',

            width: '400px',
            height: '400px',

            title: 'Demo Dialog',

            backBackgroundColor: 'red',
            backLabel: 'asdf',
            backShow: false,

            nextBackgroundColor: 'rebeccapurple',
            nextEnabled: true,
            nextLabel: 'SAVE',
            nextShow: true,

            footerMessage: 'This is an example<br>footer message!'

        }));

    }

}
