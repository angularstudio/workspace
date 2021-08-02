import {
    Component,
    ViewChild,
    ViewContainerRef,
    AfterViewInit,
    ComponentFactoryResolver,
    ViewEncapsulation
} from '@angular/core';
import { AngularStudioModalService } from './angularstudio-modal.service';
import { ClrModal } from '@clr/angular';
import { AngularStudioModalEvent } from './angularstudio-modal-event';

@Component({

    selector: 'angularstudio-modal',
    templateUrl: './angularstudio-modal.component.html',
    styleUrls: [ './angularstudio-modal.component.scss' ],
    encapsulation: ViewEncapsulation.None

})
export class AngularStudioModalComponent implements AfterViewInit {

    @ViewChild('container', { read: ViewContainerRef }) private readonly container: ViewContainerRef;
    @ViewChild(ClrModal) public view: ClrModal;

    public constructor(public modalService: AngularStudioModalService,
                       private readonly factoryResolver: ComponentFactoryResolver) {

    }

    public ngAfterViewInit() {

        this.container.createComponent(this.factoryResolver.resolveComponentFactory(this.modalService.config.componentType));

    }

    public onCancelClick(): void {

        this.view.closable = true;

        this.modalService.subject$.next({

            event: AngularStudioModalEvent.CANCEL,
            result: false

        });

        this.view.close();

    }

    public onNextClick(): void {

        this.view.closable = true;

        this.modalService.subject$.next({

            event: AngularStudioModalEvent.NEXT,
            result: true

        });

        if (this.modalService.config.closeOnNext) {

            this.view.close();

        }

    }

}
