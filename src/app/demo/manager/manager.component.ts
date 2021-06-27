import { Component } from '@angular/core';
import { AngularStudioClrManagerService } from '../../../../projects/clr-manager/src/lib/angular-studio-clr-manager.service';

@Component({
    selector: 'app-manager',
    templateUrl: './manager.component.html',
    styleUrls: [ './manager.component.scss' ]
})
export class ManagerComponent {

    public constructor(public readonly managerService: AngularStudioClrManagerService) {

        managerService.configure({

            header: {

                height: '75px',
                backgroundColor: '#ddd'

            },

            subNav: {

                backPath: '/',

                items: [

                    {

                        label: 'One',
                        icon: 'fa fa-check',
                        path: '/demo/child-one'

                    }, {

                        label: 'Two',
                        icon: 'fa fa-times',
                        path: '/demo/child-two'

                    }, {

                        label: 'Login',
                        icon: 'fa fa-search',
                        path: '/demo/clr-login'

                    }, {

                        label: 'Search',
                        icon: 'fa fa-search',
                        path: '/demo/search'

                    }, {

                        label: 'Metadata',
                        icon: 'fa fa-search',
                        path: '/demo/clr-metadata'

                    }, {

                        label: 'Form',
                        icon: 'fa fa-search',
                        path: '/demo/clr-form'

                    }, {

                        label: 'Form Editable Input',
                        icon: 'fa fa-search',
                        path: '/demo/clr-form-editable'

                    }, {

                        label: 'Fancy Form Field',
                        icon: 'fa fa-search',
                        path: '/demo/clr-fancy-field'

                    }, {

                        label: 'Wizard',
                        icon: 'fa fa-search',
                        path: '/demo/clr-wizard'

                    }, {

                        label: 'Confirm',
                        icon: 'fa fa-search',
                        path: '/demo/clr-confirm'

                    }, {

                        label: 'Modal',
                        icon: 'fa fa-search',
                        path: '/demo/modal'

                    }, {

                        label: 'Change Password',
                        icon: 'fa fa-search',
                        path: '/demo/change-password'

                    }, {

                        label: 'User Register',
                        icon: 'fa fa-search',
                        path: '/demo/user-register'

                    }, {

                        label: 'Form Validators',
                        icon: 'fa fa-search',
                        path: '/demo/form-validators'

                    }

                ]

            }

        });

    }

}
