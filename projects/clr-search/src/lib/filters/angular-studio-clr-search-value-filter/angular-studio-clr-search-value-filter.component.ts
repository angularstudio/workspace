import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({

    selector: 'angular-studio-clr-search-value-filter',
    templateUrl: './angular-studio-clr-search-value-filter.component.html',
    styleUrls: [ './angular-studio-clr-search-value-filter.component.scss' ]

})
export class AngularStudioClrSearchValueFilterComponent {

    public changes = new Subject<any>();

    // public constructor(private filterContainer: ClrDatagridFilter) {
    //
    //     filterContainer.setFilter(this);
    //
    //     console.log(filterContainer);
    // }

    public isActive(): boolean {

        return false;

    }

    public accepts(item: any): boolean {

        console.log(item);

        return true;

    }

}
