import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AngularstudioAPIClientConfig } from './angularstudio-api-client-config';

@Injectable()
export class AngularstudioAPIClientService<T> {

    public constructor(@Inject('METADATA_CONFIG') private readonly config: AngularstudioAPIClientConfig,
                       @Inject(HttpClient) private readonly httpClient: HttpClient) {

    }

    // public _getPageable<T>(url: string, dataTablePage?: any): Observable<Pageable<T>> {
    //
    //     if (dataTablePage) {
    //
    //         return this.httpClient._get<Pageable<T>>(`${ APIClient.BASE_URL }/${ url }?${ dataTablePage.toParams() }`);
    //
    //     } else {
    //
    //         return this.httpClient._get<Pageable<T>>(`${ APIClient.BASE_URL }/${ url }`);
    //
    //     }
    //
    // }

    public get<T>(url: string): Observable<T> {

        return this.httpClient.get<T>(`${ this.config.apiBase }${ url }`);

    }

    // public _search<T>(url: string, pageRequest?: PageRequest): Observable<any> {
    //
    //     if (pageRequest) {
    //
    //         return this.httpClient.get<T>(`${ this.config.apiBase }${ url }?terms=${ pageRequest.terms }&limit=${ pageRequest.limit }&offset=${ pageRequest.offset }`);
    //
    //     } else {
    //
    //         return this.httpClient.get<T>(`${ this.config.apiBase }${ url }`);
    //
    //     }
    //
    // }

    public post<T>(url: string, body?: any): Observable<T> {

        return this.httpClient.post<T>(`${ this.config.apiBase }${ url }`, body, { observe: 'response' }).pipe(catchError(e => {

            // console.log(e);
            //
            // this.toastrService.error(`${ e.statusText }!`, 'An error has occurred');

            return of(e);

        }));
        // return this.httpClient._post<T>(`${ APIClient.BASE_URL }/${ url }`, body).pipe(retryWhen(e => {
        //
        //     return e.pipe(concatMap((e, n) => {
        //
        //         if (n + 1 === environment.HTTP_REQUEST_RETRY_MAX) {
        //
        //             throw e;
        //
        //         }
        //
        //         return of(e);
        //
        //     }));
        //
        // }), timeout(environment.HTTP_REQUEST_TIMEOUT_SECONDS), catchError(e => {
        //
        //     this.toastrService.error('An error has occurred and we could not perform this _search :( We\'ll try again in 5 seconds...');
        //
        //     return of(null);
        //
        // }));

    }

    public put<T>(url: string, body: any): Observable<T> {

        return this.httpClient.put<T>(`${ this.config.apiBase }${ url }`, body).pipe(catchError(e => {

            // if (e.error && e.error.message) {
            //
            //     this.toastrService.error(`${ e.error.message }!`, 'An error has occurred');
            //
            // }

            return of(e);

        }));

    }

    public delete<T>(url: string): Observable<T> {

        return this.httpClient.delete<T>(`${ this.config.apiBase }${ url }`).pipe(catchError(e => {

            // if (e.error && e.error.message) {
            //
            //     this.toastrService.error(`${ e.error.message }!`, 'An error has occurred');
            //
            // }

            return of(e);

        }));

    }

}
