import {
    Component,
    ChangeDetectorRef,
    ViewChild,
    QueryList,
    ViewChildren,
    ViewContainerRef,
    OnDestroy,
    OnInit,
    AfterViewInit
} from '@angular/core';
import { AngularStudioClrWizardService } from './angularstudio-clr-wizard.service';
import { ClrWizard } from '@clr/angular';
import { first } from 'rxjs/operators';
import { AngularstudioClrWizardConfigStep } from './angularstudio-clr-wizard-config-step';

@Component({

    selector: 'angularstudio-clr-wizard',
    templateUrl: './angularstudio-clr-wizard.component.html',
    styleUrls: [ './angularstudio-clr-wizard.component.scss' ]

})
export class AngularStudioClrWizardComponent implements OnInit, OnDestroy, AfterViewInit {

    @ViewChild('wizard') wizard: ClrWizard;
    @ViewChildren('pages', { read: ViewContainerRef }) pages: QueryList<ViewContainerRef>;

    public constructor(private readonly changeDetector: ChangeDetectorRef,
                       public readonly createWizardService: AngularStudioClrWizardService) {

    }

    public ngAfterViewInit() {

        this.createWizardService.wizard = this.wizard;

    }

    public ngOnInit() {

        this.createWizardService.init$.pipe(first()).subscribe(config => {

            setTimeout(() => this.createWizardService.setup(this.pages));

            this.changeDetector.detectChanges();

        });

    }

    public onPageLoad(step: AngularstudioClrWizardConfigStep): void {

        step.onPageLoad$.next(step);

    }

    public ngOnDestroy() {

        this.changeDetector.detach();

    }

    public onDeleteClick(): void {

        // this.confirmDialogService.open('Confirm', `Are you sure you want to delete this tenant?`).subscribe(result => {
        //
        //     if (result) {
        //
        //         this.createWizardService.delete();
        //
        //     }
        //
        // });

    }

}
