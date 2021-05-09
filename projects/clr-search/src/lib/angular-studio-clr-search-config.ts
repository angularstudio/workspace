import { Observable, Subject } from 'rxjs';
import { AngularStudioClrSearchColumn } from './angular-studio-clr-search-column';
import { AngularStudioClrSearchButton } from './angular-studio-clr-search-button';
import { ViewContainerRef } from '@angular/core';
import { AngularStudioClrDetailPaneConfig } from './detail-pane/angular-studio-clr-detail-pane-config';
import { AngularStudioClrSearchActionBarConfig } from './angular-studio-clr-search-action-bar-config';
import { ClrDatagridStateInterface } from '@clr/angular';
import { AngularStudioClrSearchRowButtonEvent } from './angular-studio-clr-search-row-button-event';

export class AngularStudioClrSearchConfig<T, R> {

    public name: string;
    public rootViewContainer: ViewContainerRef;
    public actions?: Array<AngularStudioClrSearchActionBarConfig>;
    public detailPane?: AngularStudioClrDetailPaneConfig;

    public data$: Observable<R>;
    public transformedData$?: Subject<R> = new Subject();

    public columns: Array<AngularStudioClrSearchColumn>;
    public columnFilters: Array<string>;
    public title: string;
    public multiSelect: boolean = false;
    public pagination?: boolean = true;
    public pageSize?: number = 10;
    public pageNumber?: number = 1;
    public totalResults?: number = 0;
    public buttons?: Array<AngularStudioClrSearchButton>;
    public rowButtons?: Array<AngularStudioClrSearchButton>;

    /**
     * Freezes the datagrid while data is loading
     *
     * @type {boolean}
     */
    public loading?: boolean = false;

    /**
     * Emits a new value when the user paginates, filters, or sorts.
     *
     * @type {Subject<ClrDatagridStateInterface>}
     */
    public refresh$?: Subject<ClrDatagridStateInterface> = new Subject();

    public rowButtonClick$?: Subject<AngularStudioClrSearchRowButtonEvent<T>> = new Subject();
    public rowClick$?: Subject<T> = new Subject();
    public selectionChanged$?: Subject<Array<T>> = new Subject();
    public search$?: Subject<string> = new Subject();

    public constructor(config: AngularStudioClrSearchConfig<T, R>) {

        Object.assign(this, config);

    }

}
