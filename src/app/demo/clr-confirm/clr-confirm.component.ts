import { Component, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AngularStudioClrConfirmService } from '../../../../projects/angularstudio-clr-confirm/src/lib/angularstudio-clr-confirm.service';
import { first } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-clr-confirm',
    templateUrl: './clr-confirm.component.html',
    styleUrls: [ './clr-confirm.component.scss' ]
})
export class ClrConfirmComponent implements AfterViewInit {

    @ViewChild('angularstudioclrcontainer', { read: ViewContainerRef }) view: ViewContainerRef;

    public constructor(private readonly confirmService: AngularStudioClrConfirmService) {

    }

    public ngAfterViewInit() {

        this.confirmService.setRootContainer(this.view);

    }

    public open() {

        const nextDisabled$: Subject<boolean> = new Subject();

        this.confirmService.open({

            title: 'Delete User',
            message: 'Are you sure you want to delete this user?',
            nextDisabled$

        }).pipe(first()).subscribe(result => {

            console.log(result);

        });

        setTimeout(() => nextDisabled$.next(false), 2000);

        // this.wizardService.finish$.pipe(first()).subscribe(() => {
        //
        //     console.log('finished');
        //
        //     this.wizardService.close();
        //
        // });

    }

}
