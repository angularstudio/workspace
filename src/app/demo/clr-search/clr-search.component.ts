import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { AngularStudioClrSearchService } from '../../../../projects/clr-search/src/lib/angular-studio-clr-search.service';
import { Subject } from 'rxjs';
import { DetailPaneComponent } from './detail-pane/detail-pane.component';
import { AngularStudioClrSearchConfig } from '../../../../projects/clr-search/src/lib/angular-studio-clr-search-config';

@Component({

    selector: 'app-clr-search',
    templateUrl: './clr-search.component.html',
    styleUrls: [ './clr-search.component.scss' ]

})
export class ClrSearchComponent implements AfterViewInit {

    @ViewChild('search', { read: ViewContainerRef }) private two: ViewContainerRef;

    private config: AngularStudioClrSearchConfig<any, any>;
    private terms: string = '';
    private data = Array.from({ length: 93 }, (_, i) => {

        return {

            iteration: i + 1,
            random: Math.random(),
            name: 'Constant data example.',
            date: new Date().toISOString()

        };

    });

    public constructor(private readonly searchService: AngularStudioClrSearchService<any, any>) {

    }

    public ngAfterViewInit(): void {

        const click$ = new Subject<any>();

        click$.subscribe(button => console.log(button));

        this.config = this.searchService.init({

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
            pagination: true,
            title: 'Server Side Search Demo',
            multiSelect: true

            // buttons: [
            //
            //     { id: 'button1', label: 'Button 1', click$, class: AngularStudioClrSearchButtonClass.DANGER_OUTLINE },
            //     { id: 'button2', label: 'Button 2', click$, class: AngularStudioClrSearchButtonClass.INFO }
            //
            // ]

        });

        this.config.refresh$.subscribe(state => {

            const data = this.getFromServer(1, this.terms);

            this.searchService.setData('two', { results: data }, 93);

        });

        this.config.search$.subscribe(terms => {

            this.terms = terms;

            const data = this.getFromServer(1, this.terms);

            this.searchService.setData('two', { results: data }, data.length);

        });

        this.searchService.setData('two', { results: this.getFromServer(1, this.terms) }, 93);

    }

    public getFromServer(currentPage: number, terms: string): Array<any> {

        const paginationState = this.config.getPagination();

        if (terms.length > 0) {

            const maxToSimulate = Math.ceil(Math.random() * 10);

            const results = Array.from({ length: maxToSimulate }, (_, i) => {

                return {

                    iteration: i + 1,
                    random: Math.random(),
                    name: 'Random data from search.',
                    date: new Date().toISOString()

                };

            });

            return results.filter(item => Object.values(item).some(term => term.toString().includes(terms))).slice((paginationState.currentPage - 1) * paginationState.perPage, (paginationState.currentPage - 1) * paginationState.perPage + paginationState.perPage);

        } else {

            return this.data.filter(item => Object.values(item).some(term => term.toString().includes(terms))).slice((paginationState.currentPage - 1) * paginationState.perPage, (paginationState.currentPage - 1) * paginationState.perPage + paginationState.perPage);

        }

    }

}
