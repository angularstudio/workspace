import { Subject, ReplaySubject } from 'rxjs';
import { AngularStudioClrSearchColumn } from './angular-studio-clr-search-column';
import { AngularStudioClrSearchButton } from './angular-studio-clr-search-button';
import { ViewContainerRef } from '@angular/core';
import { AngularStudioClrDetailPaneConfig } from './detail-pane/angular-studio-clr-detail-pane-config';
import { AngularStudioClrSearchActionBarConfig } from './angular-studio-clr-search-action-bar-config';
import { ClrDatagridStateInterface } from '@clr/angular';
import { AngularStudioClrSearchRowButtonEvent } from './angular-studio-clr-search-row-button-event';
import { AngularStudioClrSearchPagination } from './angular-studio-clr-search-pagination';
import { AngularStudioClrSearchResult } from './angular-studio-clr-search-result';

export class AngularStudioClrSearchConfig<T, R> {

    public name: string;
    public rootViewContainer: ViewContainerRef;
    public actions?: Array<AngularStudioClrSearchActionBarConfig>;
    public detailPane?: AngularStudioClrDetailPaneConfig;

    /**
     * Transformed data passed from data$.
     *
     * We use a ReplaySubject so that if data is set before ngOnInit() is called
     * we have a value ready.
     *
     * @type {ReplaySubject<R>}
     */
    public transformedData$?: ReplaySubject<AngularStudioClrSearchResult<R>> = new ReplaySubject();

    public columns: Array<AngularStudioClrSearchColumn>;
    public columnFilters?: Array<string>;
    public title: string;
    public multiSelect: boolean = false;
    public pagination?: boolean = true;
    public totalItems?: number = 0;
    public buttons?: Array<AngularStudioClrSearchButton>;
    public rowButtons?: Array<AngularStudioClrSearchButton>;

    /**
     * Freezes the datagrid while data is loading
     *
     * @type {boolean}
     */
    public loading?: boolean = true;

    /**
     * Emits a new value when the user paginates, filters, or sorts.
     *
     * @type {Subject<ClrDatagridStateInterface>}
     */
    public refresh$?: Subject<ClrDatagridStateInterface> = new Subject();

    public rowButtonClick$?: Subject<AngularStudioClrSearchRowButtonEvent<T>> = new Subject();
    public rowClick$?: Subject<T> = new Subject();
    public selectionChanged$?: Subject<Array<T>> = new Subject();
    public selected?: Array<T>;
    public search$?: Subject<string> = new Subject();
    public paginationState?: ClrDatagridStateInterface = { page: { current: 1, size: 10 } };

    public constructor(config: AngularStudioClrSearchConfig<T, R>) {

        Object.assign(this, config);

    }

    public getPagination?(): AngularStudioClrSearchPagination {

        return {

            currentPage: this.paginationState.page.current,
            perPage: this.paginationState.page.size

        };

    }

}
