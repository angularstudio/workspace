import { ToolbarMenuItem }                        from '@angular.studio/toolbar';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card }                                   from './card';

@Component({

    selector: 'card',

    template: `

        <div class="wrapper mat-elevation-z6"
             [style.width]="config.width"
             [style.height]="config.height">

            <div class="image"
                 [style.background-image]="'url(' + config.imageUrl + ')'"></div>

            <div class="bottom">

                <div class="label"
                     [style.color]="config.labelColor"
                     [style.background-color]="config.backgroundColor">{{ config.label }}</div>

                <div class="button">

                    <mat-menu #appMenu="matMenu">
                        <button mat-menu-item>Settings</button>
                        <button mat-menu-item>Help</button>
                    </mat-menu>

                    <button mat-icon-button [matMenuTriggerFor]="appMenu">
                        asdf
                    </button>
                </div>

            </div>

        </div>

    `,

    styleUrls: [ 'card.component.scss' ]

})
export class CardComponent {

    @Input() public config: Card;

    @Output() public onClick: EventEmitter<ToolbarMenuItem> = new EventEmitter();

}
