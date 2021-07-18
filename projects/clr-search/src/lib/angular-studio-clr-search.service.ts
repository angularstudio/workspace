import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AngularStudioClrSearchConfig } from './angular-studio-clr-search-config';
import { Subscription } from 'rxjs';
import { AngularStudioClrSearchComponent } from './angular-studio-clr-search.component';
import { AngularStudioClrSearchResult } from './angular-studio-clr-search-result';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioClrSearchService<T, R> {

    /**
     * Maintains all of the configuration(s) for handling multiple
     * instances of the search component.
     *
     * @type {{[p: string]: AngularStudioClrSearchConfig<T, R>}}
     */
    public config: { [ name: string ]: AngularStudioClrSearchConfig<T, R> } = {};

    /**
     * Set by the caller when injected in to a component.
     * Only needs to be set once.
     *
     * @type {ViewContainerRef}
     */
    public rootViewContainer: ViewContainerRef;

    /**
     * Subscription for data emitting used to unsubscribe on destroy.
     *
     * @type {Subscription}
     * @private
     */
    private subscription: Subscription;

    /**
     * Dependency injection.
     *
     * @param {ComponentFactoryResolver} factoryResolver
     */
    public constructor(private readonly factoryResolver: ComponentFactoryResolver) {

    }

    /**
     * Called to initialize a new search instance.
     *
     * @param {AngularStudioClrSearchConfig<T, R>} config
     *
     * @returns {AngularStudioClrSearchConfig<T, R>}
     */
    public init(config: AngularStudioClrSearchConfig<T, R>): AngularStudioClrSearchConfig<T, R> {

        //
        // Instantiate a new search configuration based on name.
        //
        this.config[ config.name ] = new AngularStudioClrSearchConfig(config);

        //
        // Create the search component dynamically.
        //
        const component = this.config[ config.name ].rootViewContainer.createComponent(this.factoryResolver.resolveComponentFactory(AngularStudioClrSearchComponent));

        //
        // Assign the new config to the newly created search component.
        //
        component.instance.config = this.config[ config.name ];

        return this.config[ config.name ];

    }

    /**
     * Update the datagrid items.
     *
     * @param {string} name Configuration instance name.
     * @param {R} data New data to set.
     * @param {number} totalItems Total number of server side items (not currently passed total).
     */
    public setData(name: string, data: AngularStudioClrSearchResult<R>, totalItems: number): void {

        this.config[ name ].totalItems = totalItems;
        this.config[ name ].transformedData$.next(this.transformData(name, data));

    }

    /**
     * Transform the data set if there are any transformer functions configured.
     *
     * @param {string} name Configuration instance name.
     * @param data Data to apply transformers to.
     *
     * @returns {AngularStudioClrSearchResult<R>}
     * @private
     */
    private transformData(name: string, data: AngularStudioClrSearchResult<R>): AngularStudioClrSearchResult<R> {

        for (let i = 0; i < data.results.length; i++) {

            for (let j = 0; j < this.config[ name ].columns.length; j++) {

                if (this.config[ name ].columns[ j ].transformer) {

                    data.results[ i ][ this.config[ name ].columns[ j ].id ] = this.config[ name ].columns[ j ].transformer(data.results[ i ][ this.config[ name ].columns[ j ].id ], data.results[ i ]);

                }

            }

        }

        return data;

    }

    /**
     * Clean up resources when the search component is removed from the dom.
     *
     * @param {string} name Name of this configuration (search instance).
     */
    public destroy(name: string): void {

        delete this.config[ name ];

    }

}
