import { Button, Buttons }         from '@angular.studio/buttons';
import { Confirm, ConfirmService } from '@angular.studio/confirm';
import { DialogService }           from '@angular.studio/dialog';
import { Plans }                   from '@angular.studio/plans';
import { Toggle }                  from '@angular.studio/toggle';
import { Toolbar }                 from '@angular.studio/toolbar';
import { Component, OnInit }       from '@angular/core';
import { Board }                   from '../../projects/board/src/lib/board';
import { Card }                    from '../../projects/card/src/lib/card';

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

    public toggle: Toggle = {

        backgroundColor: '#333',
        iconClass: 'fad fa-home',
        iconColor: '#fff',
        iconFontSize: '20px',
        title: 'Notify me when xyz',
        titleFontColor: '#fff',
        description: 'You will be notified when xyz occurs.',
        descriptionFontColor: '#666',
        toggleLabel: 'asdf',
        toggleColor: 'accent',
        toggleFontColor: 'limegreen',
        width: '700px',

    };

    public plans: Plans = new Plans({

        shadow: true,
        backgroundColor: '#020215',
        footer: 'These prices are valid until January 1, 2021. Contact support for any questions or concerns.',
        footerFontColor: '#999',
        title: 'Simple and flexible pricing',
        titleFontColor: '#fff',
        description: 'Pay only for what you use. All plans are backed by our money back guarantee.',
        descriptionFontColor: '#999',
        buttonPrimary: {

            kind: 'raised',
            backgroundColor: '#364967',
            label: 'Start your free trial',
            width: '200px'

        },
        plans: [

            {

                backgroundColor: '#391b75',
                button: 'SUBSCRIBE NOW',
                buttonBackgroundColor: '#fd20d5',
                iconClass: 'fad fa-home',
                iconBackgroundColor: '#999',
                title: 'Personal',
                titleFontColor: '#ccc',
                price: '$19.99',
                priceFontColor: '#fff',
                unit: '/ mo',
                details: [ '1 camera', '7+ days storage', 'Unlimited sharing' ],
                detailsFontColor: '#ccc'

            }, {

                backgroundColor: '#7543E8',
                button: 'SUBSCRIBE NOW',
                buttonBackgroundColor: '#fd20d5',
                iconClass: 'fad fa-rocket',
                iconBackgroundColor: '#999',
                title: 'Starter',
                price: '$49.99',
                unit: '/ mo',
                details: [ 'Up to 3+ cameras', '30+ days storage', 'Unlimited sharing' ]

            }, {

                backgroundColor: '#8956FF',
                button: 'SUBSCRIBE NOW',
                buttonBackgroundColor: '#fd20d5',
                iconClass: 'fad fa-atom',
                iconBackgroundColor: '#999',
                title: 'Pro',
                price: '$99.99',
                unit: '/ mo',
                details: [ 'Up to 7+ cameras', '30+ days storage', 'Unlimited sharing' ]

            }, {

                backgroundColor: '#7543E8',
                button: 'CONTACT US',
                iconBackgroundColor: '#999',
                iconClass: 'fad fa-building',
                title: 'Enterprise',
                price: '$7.99',
                unit: '/ ea',
                details: [ 'Unlimited cameras', '30+ days storage', 'Unlimited sharing' ]

            }

        ]

    });

    // public features: FeaturesTable = {};

    // public datatable: Datatable = {
    //
    //     columns: [ {
    //
    //         id: 'feature',
    //         label: 'FEATURES'
    //
    //     }, {
    //
    //         id: ''
    //     } ]
    // };

    public buttons: Buttons = new Buttons({

        leftButtons: [ new Button({

            id: 'delete',
            label: 'DELETE',
            backgroundColor: 'red'

        }) ],

        rightButtons: [ new Button({

            id: 'save',
            label: 'SAVE',
            backgroundColor: 'green'

        }) ],

        textColor: '#ccc'

    });

    public confirm: Confirm = new Confirm({

        title: 'Delete User',
        message: 'Are you sure you want to delete this user?',
        confirmLabel: 'DELETE'

    });

    public constructor(private readonly dialogService: DialogService,
                       private readonly confirmService: ConfirmService) {

    }

    public ngOnInit(): void {

        this.confirmService.open(this.confirm);

        // this.dialogService.open(DemoDialogComponent, new DialogConfig({
        //
        //     id: 'demo',
        //
        //     width: '400px',
        //     height: '400px',
        //
        //     title: 'Demo Dialog',
        //
        //     backBackgroundColor: 'red',
        //     backLabel: 'asdf',
        //     backShow: false,
        //
        //     nextBackgroundColor: 'rebeccapurple',
        //     nextEnabled: true,
        //     nextLabel: 'SAVE',
        //     nextShow: true,
        //
        //     footerMessage: 'This is an example<br>footer message!'
        //
        // }));

    }

}
