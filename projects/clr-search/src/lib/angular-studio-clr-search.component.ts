import { Component, OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AngularStudioClrSearchConfig } from './angular-studio-clr-search-config';
import { ClrDatagridStateInterface } from '@clr/angular';

@Component({

    selector: 'angularstudio-clr-search',
    templateUrl: './angular-studio-clr-search.component.html',
    styleUrls: [ './angular-studio-clr-search.component.scss' ]

})
export class AngularStudioClrSearchComponent implements OnInit, OnDestroy {

    public detailState: any;

    public totalItems: number = 0;
    public page: number = 10;

    public results: Array<any> = [];
    public config: AngularStudioClrSearchConfig<any, any>;

    public selected: Array<any> = [];
    public formControl = new FormControl();

    public data: any;

    private readonly subscription: Subscription;

    public constructor(private readonly changeDetector: ChangeDetectorRef) {

        changeDetector.detach();

        this.subscription = this.formControl.valueChanges.pipe(debounceTime(400)).subscribe(value => {

            this.config.search$.next(value);

        });

    }

    public refresh(pagination: ClrDatagridStateInterface) {

        this.config.paginationState = pagination;

        this.config.loading = true;

        this.config.refresh$.next(pagination);

    }

    public onSelectionChange(selected: Array<any>) {

        this.selected = selected;

        this.config.selected = selected;

        this.config.selectionChanged$.next(selected);

    }

    public onDetailOpen(e: any): void {

        if (e) {

            this.changeDetector.reattach();

        }

    }

    public ngOnInit() {

        this.changeDetector.detectChanges();

        this.config.transformedData$.pipe(debounceTime(100)).subscribe(results => {

            this.totalItems = 0;
            this.results = results.results;
            this.config.loading = false;

            this.changeDetector.detectChanges();

        });
    }

    public ngOnDestroy() {

        this.subscription.unsubscribe();

    }

}
