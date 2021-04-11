import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularStudioClrFormService } from './angularstudio-clr-form.service';

@Component({

    selector: 'angularstudio-clr-form',
    templateUrl: './angularstudio-clr-form.component.html',
    styleUrls: [ './angularstudio-clr-form.component.scss' ],
    encapsulation: ViewEncapsulation.None

})
export class AngularstudioClrFormComponent implements OnInit {

    public constructor(public readonly formService: AngularStudioClrFormService<any>) {

    }

    public ngOnInit(): void {

    }

}
