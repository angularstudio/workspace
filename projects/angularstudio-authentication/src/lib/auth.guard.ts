import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { AngularStudioAuthenticationService } from './service';


@Injectable({
    providedIn: 'root'
})
export class AngularStudioAuthenticationGuard implements CanActivate {

    public constructor(private readonly router: Router, private readonly authenticationService: AngularStudioAuthenticationService<any>) {

    }

    public canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if (this.authenticationService.isLoggedIn()) {

            return true;

        }

        this.router.navigate([ '/login' ]);

        return false;

    }

}
