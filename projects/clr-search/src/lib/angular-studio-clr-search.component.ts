import { Component, OnDestroy, ChangeDetectorRef, AfterContentChecked, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, delay } from 'rxjs/operators';
import { AngularStudioClrSearchService } from './angular-studio-clr-search.service';
import { Subscription } from 'rxjs';
import { AngularStudioClrSearchConfig } from './angular-studio-clr-search-config';
import { ClrDatagridStateInterface } from '@clr/angular';
import { AngularStudioClrSearchValueFilterComponent } from './filters/angular-studio-clr-search-value-filter/angular-studio-clr-search-value-filter.component';

@Component({

    selector: 'angularstudio-clr-search',
    templateUrl: './angular-studio-clr-search.component.html',
    styleUrls: [ './angular-studio-clr-search.component.scss' ]

})
export class AngularStudioClrSearchComponent implements AfterContentChecked, OnInit, OnDestroy {

    public valueFilter = new AngularStudioClrSearchValueFilterComponent();

    public detailState;

    public page: number = 10;

    public results: Array<any> = [];
    public loading: boolean = true;
    public config: AngularStudioClrSearchConfig<any, any>;

    public selected: Array<any> = [];
    public formControl = new FormControl();

    public data: any;

    private readonly subscription: Subscription;

    public constructor(public readonly searchService: AngularStudioClrSearchService<any, any>,
                       private readonly changeDetector: ChangeDetectorRef) {

        changeDetector.detach();

        this.subscription = this.formControl.valueChanges.pipe(debounceTime(400)).subscribe(value => {

            this.config.search$.next(value);

        });

        console.log(this.config);

    }

    public refresh(state: ClrDatagridStateInterface) {

        this.config.refresh$.next(state);

    }

    public onSelectionChange(selected: Array<any>) {

        console.log(selected);

        this.selected = selected;

        this.config.selectionChanged$.next(selected);

    }

    public onDetailOpen(e: any): void {

        if (e) {


        } else {

            this.changeDetector.detach();

        }

    }

    public ngOnInit() {

        this.config.data$.subscribe(data => {

            // this.page = 1;
            this.changeDetector.detach();

        });

    }

    public ngAfterContentChecked() {

        this.changeDetector.reattach();

        this.config.transformedData$.pipe(delay(2000)).subscribe(results => {

            this.results = results.results;

        });

    }

    public ngOnDestroy() {

        this.subscription.unsubscribe();

    }

}
