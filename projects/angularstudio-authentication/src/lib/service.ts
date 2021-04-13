import { Injectable, Inject } from '@angular/core';
import { Config } from './config';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of, ReplaySubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

/**
 * Authentication service to handle login and logout events
 * within an angular application.
 */
@Injectable({
    providedIn: 'root'
})
export class AngularStudioAuthenticationService<T> {

    /**
     * Observable to emit login and logout events.
     *
     * @type {ReplaySubject<HttpResponse<T>>}
     */
    public readonly data$: ReplaySubject<HttpResponse<T>> = new ReplaySubject();

    /**
     * @auth0/angular-jwt helper service for validating jwt tokens.
     *
     * @type {JwtHelperService}
     * @private
     */
    private readonly helper = new JwtHelperService();

    /**
     * setInterval reference for the check loop.
     *
     * @type {Timeout}
     * @private
     */
    private interval: any;

    /**
     * Constructor handled by dependency injection.
     *
     * @param {Config} config Configuration for service provided at module forRoot() call.
     * @param {HttpClient} httpClient HttpClient injected by angular DI.
     */
    public constructor(@Inject('AUTH_JWT_CONFIG') private readonly config: Config,
                       @Inject(HttpClient) private readonly httpClient: HttpClient) {

    }

    /**
     * Create an http login request using the configured endpoint.
     *
     * @param {string} email
     * @param {string} password
     * @param {string} jwtPropertyName Name of the property returned from the api that contains the token string.
     *
     * @returns {Observable<HttpResponse<T>>}
     */
    public login(email: string, password: string, jwtPropertyName: string = 'token'): Observable<HttpResponse<T>> {

        if (this.isLoggedIn()) {

            this.logout();

        }

        this.httpClient.post<any>(`${ this.config.baseUrl }${ this.config.path }`, {

            email,
            password

        }, {

            observe: 'response'

        }).pipe(catchError(e => of(e))).subscribe((result) => {

            if (result.status === 200) {

                this.setToken(result.body[ jwtPropertyName ]);

                const {

                    [ 'exp' ]: deletedKey,
                    [ 'iat' ]: deletedKey2,
                    ...cleanData

                } = this.helper.decodeToken(this.getToken());

                if (this.config.check) {

                    this.checkSessionStart();

                }

                result.body = cleanData;

            }

            this.data$.next(result);

        });

        return this.data$;

    }

    /**
     * Log user out of the session.
     */
    public logout(): void {

        if (this.interval) {

            clearInterval(this.interval);

        }

        this.removeToken();

        this.data$.next(null);
        this.data$.complete();

    }

    /**
     * Returns true if there is a valid token and it is not expired otherwise false.
     *
     * @returns {boolean} true if valid
     */
    public isLoggedIn(): boolean {

        const token = this.getToken();

        if (token) {

            return !this.helper.isTokenExpired(token);

        }

    }

    //
    // Session validation.
    //

    /**
     * Start a loop to monitor for session expiration time.
     * This loop is ended upon logout() or an expiration event occurs.
     */
    public checkSessionStart(): void {

        this.interval = setInterval(() => {

            this.checkSession();

        }, 1000);

    }

    /**
     * Determine if we need to call logout().
     * This is called from the checkSessionStart() loop.
     */
    public checkSession(): void {

        const token = localStorage.getItem(this.config.name);

        if (token && this.helper.isTokenExpired(token)) {

            this.logout();

        }

    }


    //
    // localStorage manipulation
    //

    /**
     * Retrieve the token from localStorage.
     *
     * @returns {string} token string
     */
    public getToken(): string {

        return localStorage.getItem(this.config.name);

    }

    /**
     * Set the tokens value.
     *
     * @param {string} value token string
     */
    public setToken(value: string): void {

        localStorage.setItem(this.config.name, value);

    }

    /**
     * Remove the token from localStorage.
     */
    public removeToken(): void {

        localStorage.removeItem(this.config.name);

    }

}
