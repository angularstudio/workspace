import {
    Component,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver,
    Input,
    AfterViewInit,
    ChangeDetectorRef
} from '@angular/core';
import { AngularStudioClrSearchConfig } from '../angular-studio-clr-search-config';

@Component({

    selector: 'detail-pane',
    templateUrl: './detail-pane.component.html'

})
export class DetailPaneComponent implements AfterViewInit {

    @ViewChild('detailPane', { read: ViewContainerRef }) public detailPane: ViewContainerRef;

    @Input() public config: AngularStudioClrSearchConfig<any, any>;
    @Input() public data: any;

    public constructor(private readonly factoryResolver: ComponentFactoryResolver,
                       private readonly changeDetector: ChangeDetectorRef) {

    }

    public ngAfterViewInit() {

        if (this.config.detailPane) {

            //
            // Prevent change detection from occurring temporarily.
            //
            this.changeDetector.detach();

            const comp = this.detailPane.createComponent(this.factoryResolver.resolveComponentFactory(this.config.detailPane.componentType));

            comp.instance.data = this.data;

            //
            // Draw the changes for the new component.
            //
            this.changeDetector.detectChanges();

            //
            // Let change detection run itself.
            //
            this.changeDetector.reattach();

        }

    }

}
