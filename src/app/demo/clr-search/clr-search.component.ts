import { Component, ViewChild, ViewContainerRef, AfterViewInit, OnDestroy } from '@angular/core';
import { AngularStudioClrSearchService } from '../../../../projects/clr-search/src/lib/angular-studio-clr-search.service';
import { Subject } from 'rxjs';
import { DetailPaneComponent } from './detail-pane/detail-pane.component';

@Component({
    selector: 'app-clr-search',
    templateUrl: './clr-search.component.html',
    styleUrls: [ './clr-search.component.scss' ]
})
export class ClrSearchComponent implements AfterViewInit, OnDestroy {

    @ViewChild('one', { read: ViewContainerRef }) private one: ViewContainerRef;
    @ViewChild('two', { read: ViewContainerRef }) private two: ViewContainerRef;

    private interval1: any;

    public constructor(private readonly searchService: AngularStudioClrSearchService<any, any>) {

    }

    public ngAfterViewInit(): void {

        const data1$ = new Subject<any>();
        const data2$ = new Subject<any>();
        const click$ = new Subject<any>();

        click$.subscribe(button => console.log(button));

        // this.searchService.init({
        //
        //     name: 'one',
        //     rootViewContainer: this.one,
        //
        //     rowButtons: [ { class: 'fad fa-trash', id: 'delete', label: 'delete' } ],
        //
        //     columns: [
        //
        //         {
        //
        //             id: 'name',
        //             name: 'Name'
        //
        //         }, {
        //
        //             id: 'iteration',
        //             name: 'iteration++'
        //
        //         }, {
        //
        //             id: 'random',
        //             name: 'random()'
        //
        //         }, {
        //
        //             id: 'date',
        //             name: 'Date Transformed',
        //             transformer: (data) => {
        //
        //                 return new Date(data).toDateString() + ' asdfasdf';
        //
        //             }
        //
        //         }
        //
        //     ],
        //     data$: data1$,
        //     pageSize: 1,
        //     pagination: true,
        //     title: 'Search Example #1',
        //     columnFilters: [],
        //     multiSelect: true,
        //
        //     buttons: [
        //
        //         { id: 'button1', label: 'Button 1', click$, class: AngularStudioClrSearchButtonClass.DANGER_OUTLINE },
        //         { id: 'button2', label: 'Button 2', click$, class: AngularStudioClrSearchButtonClass.INFO }
        //
        //     ]
        //
        // });

        let iteration1 = 0;

        this.interval1 = setInterval(() => {

            iteration1++;

            data1$.next({

                results: [ {

                    iteration: iteration1,
                    random: Math.random(),
                    name: 'Search Example #1',
                    date: new Date().toISOString()

                } ]

            });

        }, 1000);

        const data = Array.from({ length: 93 }, (_, i) => {

            return {

                iteration: i,
                random: Math.random(),
                name: 'Search Example #2',
                date: new Date().toISOString()

            };

        });

        const config = this.searchService.init({

            name: 'two',
            rootViewContainer: this.two,

            // actions: [
            //
            //     {
            //
            //         dropdown: true,
            //         dropdownPrefix: 'ADD TO FEATURE..',
            //         buttons: [
            //
            //             {
            //
            //                 id: 'button1',
            //                 label: 'Button 1',
            //                 click$,
            //                 small: true,
            //                 class: AngularStudioClrSearchButtonClass.INFO
            //
            //             }, {
            //
            //                 id: 'button2',
            //                 label: 'Button 2',
            //                 click$,
            //                 small: true,
            //                 class: AngularStudioClrSearchButtonClass.INFO
            //
            //             }
            //
            //         ]
            //
            //     }
            //
            // ],

            detailPane: {

                componentType: DetailPaneComponent

            },

            columns: [

                {

                    id: 'name',
                    name: 'Name'

                }, {

                    id: 'iteration',
                    name: 'iteration++'

                }, {

                    id: 'random',
                    name: 'random()'

                }, {

                    id: 'date',
                    name: 'Date Transformed',
                    transformer: (data) => {

                        return new Date(data).toDateString();

                    }

                }

            ],
            data$: data2$,
            pagination: true,
            title: 'Search Example #2',
            columnFilters: [],
            multiSelect: true

            // buttons: [
            //
            //     { id: 'button1', label: 'Button 1', click$, class: AngularStudioClrSearchButtonClass.DANGER_OUTLINE },
            //     { id: 'button2', label: 'Button 2', click$, class: AngularStudioClrSearchButtonClass.INFO }
            //
            // ]

        });

        config.refresh$.subscribe(state => {

            console.log(state);

            if (state.filters) {
                data2$.next({

                    results: data.filter(item => item.iteration === state.filters[ 0 ].value.iteration)

                });


            }
        });

        config.search$.subscribe(terms => {

            config.pageNumber = 1;

            const newResults = data.filter(item => Object.values(item).some(term => {

                return term.toString().includes(terms);

            }));

            config.totalResults = newResults.length;

            if (terms) {

                if (newResults.length > 0) {

                    data2$.next({

                        results: newResults

                    });

                } else {

                    console.log(12312);
                }

            } else {

                console.log(8888);
                data2$.next({

                    results: newResults

                });

            }

        });

        setTimeout(() => {

            data2$.next({

                results: data

            });

        }, 1000);

    }

    public ngOnDestroy() {

        clearInterval(this.interval1);

    }

}
