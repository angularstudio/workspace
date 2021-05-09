import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { AngularStudioClrSearchConfig } from './angular-studio-clr-search-config';
import { Subscription } from 'rxjs';
import { AngularStudioClrSearchComponent } from './angular-studio-clr-search.component';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioClrSearchService<T, R> {

    public config: { [ name: string ]: AngularStudioClrSearchConfig<T, R> } = {};

    public rootViewContainer: ViewContainerRef;

    private subscription: Subscription;

    public constructor(private readonly factoryResolver: ComponentFactoryResolver) {

    }

    public init(config: AngularStudioClrSearchConfig<T, R>): AngularStudioClrSearchConfig<T, R> {

        this.config[ config.name ] = new AngularStudioClrSearchConfig(config);

        //
        // Create the search component dynamically.
        //
        const component = this.config[ config.name ].rootViewContainer.createComponent(this.factoryResolver.resolveComponentFactory(AngularStudioClrSearchComponent));

        //
        // Assign the new config to the newly created search component.
        //
        component.instance.config = this.config[ config.name ];

        //
        // Transform the data whenever changes are emitted from the outside.
        //
        this.subscription = this.config[ config.name ].data$.subscribe((data: any) => {

            for (let i = 0; i < data.results.length; i++) {

                for (let j = 0; j < this.config[ config.name ].columns.length; j++) {

                    if (this.config[ config.name ].columns[ j ].transformer) {

                        data.results[ i ][ this.config[ config.name ].columns[ j ].id ] = this.config[ config.name ].columns[ j ].transformer(data.results[ i ][ this.config[ config.name ].columns[ j ].id ]);

                    }

                }

            }

            setTimeout(() => {

                this.config[ config.name ].transformedData$.next(data);

            }, 3000);

        });

        return this.config[ config.name ];

    }

    /**
     * Clean up resources when the search component is removed from the dom.
     *
     * @param {string} name Name of this configuration (search instance).
     */
    public destroy(name: string): void {

        delete this.config[ name ];
        // delete this.transformedData[ name ];

    }

}
