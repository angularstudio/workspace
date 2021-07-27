import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { AngularStudioModalService } from '../../../../projects/angularstudio-modal/src/lib/angularstudio-modal.service';
import { ModalExampleComponent } from './modal-example/modal-example.component';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: [ './modal.component.scss' ]
})
export class ModalComponent implements AfterViewInit {

    @ViewChild('modalRoot', { read: ViewContainerRef }) private modalRoot: ViewContainerRef;

    public constructor(private readonly modalService: AngularStudioModalService) {

    }

    public ngAfterViewInit() {

        this.modalService.setRootContainer(this.modalRoot);

    }

    public open(): void {

        this.modalService.open({

            title: 'Some Modal',
            description: 'asf asdf asd fasd fasd fasdf a sdfa sdf asd fasdf asdf asd f asdfa sdfasdfasdf as sda fasdfdsa!',
            componentType: ModalExampleComponent,

            alerts: [

                {

                    type: 'info',
                    message: 'Some alert message..',
                    iconClass: 'fad fa-exclamation-triangle'

                }

            ]

        });

    }

}
