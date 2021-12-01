import { Component, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AngularStudioComponentFactoryService } from '../../../../projects/angularstudio-component-factory/src/lib/angularstudio-component-factory.service';

@Component({
    selector: 'app-component-factory',
    templateUrl: './component-factory.component.html',
    styleUrls: [ './component-factory.component.scss' ]
})
export class ComponentFactoryComponent implements AfterViewInit {

    @ViewChild('outlet', { read: ViewContainerRef }) private readonly outletViewChild: ViewContainerRef;

    public constructor(private readonly componentFactoryService: AngularStudioComponentFactoryService) {

    }

    public ngAfterViewInit() {

    }
}
