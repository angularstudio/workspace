import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AngularstudioClrLoginAuthenticationService } from './angularstudio-clr-login-authentication.service';

@Injectable({ providedIn: 'root' })
export class AngularstudioClrLoginAuthGuard implements CanActivate {

    public constructor(private router: Router) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (AngularstudioClrLoginAuthenticationService.isLoggedIn()) {

            return true;

        } else {

            this.router.navigate([ '/login' ], { queryParams: { returnUrl: state.url } });

            return false;

        }

    }

}
