import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AngularstudioClrLoginAuthenticationService {

    public static getToken(): string {

        return localStorage.getItem('token');

    }

    public static setToken(token: string): void {

        localStorage.setItem('token', token);

    }

    public static clearToken(): void {

        localStorage.removeItem('token');

    }

    public static isLoggedIn(): boolean {

        const token: string = localStorage.getItem('token');

        if (!!token && token.match(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)) {

            if (token) {

                return !new JwtHelperService().isTokenExpired(token);

            }

        }

        return false;

    }

    public isLoggedIn(): boolean {

        const token: string = localStorage.getItem('token');

        if (!!token && token.match(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/)) {

            if (token) {

                return !new JwtHelperService().isTokenExpired(token);

            }

        }

        return false;

    }

}
