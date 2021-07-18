import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularStudioAPIClientConfig } from './angularstudio-api-client-config';
import { API_CLIENT_CONFIG } from "./angularstudio-api-client-config-token";
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioAPIClientService<T> {

    public constructor(@Inject(API_CLIENT_CONFIG) private readonly config: AngularStudioAPIClientConfig,
                       @Inject(HttpClient) private readonly httpClient: HttpClient) {

    }

    public search<T>(url: string): Observable<HttpResponse<Array<T>>> {

        return this.httpClient.get<Array<T>>(`${ this.config.apiBase }${ url }`, { observe: 'response' }).pipe(catchError(e => {

            return of(e);

        }));

    }

    public get<T>(url: string): Observable<HttpResponse<T>> {

        return this.httpClient.get<T>(`${ this.config.apiBase }${ url }`, { observe: 'response' }).pipe(catchError(e => {

            return of(e);

        }));

    }

    public post<T>(url: string, body?: any): Observable<HttpResponse<T>> {

        return this.httpClient.post<T>(`${ this.config.apiBase }${ url }`, body, { observe: 'response' }).pipe(catchError(e => {

            return of(e);

        }));

    }

    public put<T>(url: string, body: any): Observable<HttpResponse<T>> {

        return this.httpClient.put<T>(`${ this.config.apiBase }${ url }`, body, { observe: 'response' }).pipe(catchError(e => {

            return of(e);

        }));

    }

    public patch<T>(url: string, body: any): Observable<HttpResponse<T>> {

        return this.httpClient.patch<T>(`${ this.config.apiBase }${ url }`, body, { observe: 'response' }).pipe(catchError(e => {

            return of(e);

        }));

    }

    public delete<T>(url: string): Observable<HttpResponse<T>> {

        return this.httpClient.delete<T>(`${ this.config.apiBase }${ url }`, { observe: 'response' }).pipe(catchError(e => {

            return of(e);

        }));

    }

}
