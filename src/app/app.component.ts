import { Component } from '@angular/core';
import { Board }     from '../../projects/board/src/lib/board';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

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

}
