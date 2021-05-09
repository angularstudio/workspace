import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input, AfterViewInit } from '@angular/core';
import { AngularStudioClrSearchConfig } from '../angular-studio-clr-search-config';

@Component({

    selector: 'detail-pane',
    templateUrl: './detail-pane.component.html'

})
export class DetailPaneComponent implements AfterViewInit {

    @ViewChild('detailPane', { read: ViewContainerRef }) public detailPane: ViewContainerRef;

    @Input() public config: AngularStudioClrSearchConfig<any, any>;

    public constructor(private readonly factoryResolver: ComponentFactoryResolver) {

    }

    public ngAfterViewInit() {

        if (this.config.detailPane) {

            this.detailPane.createComponent(this.factoryResolver.resolveComponentFactory(this.config.detailPane.componentType));

        }

    }

}
