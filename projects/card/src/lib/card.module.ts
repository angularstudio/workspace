import { CommonModule }    from '@angular/common';
import { NgModule }        from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule }   from '@angular/material/menu';
import { CardComponent }   from './card.component';

@NgModule({

    declarations: [ CardComponent ],

    imports: [

        CommonModule,
        MatButtonModule,
        MatMenuModule,

    ],

    exports: [ CardComponent ]

})
export class CardModule {
}
