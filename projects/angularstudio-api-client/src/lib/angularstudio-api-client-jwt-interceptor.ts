import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AngularStudioApiClientJwtInterceptor implements HttpInterceptor {

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (localStorage.getItem('token')) {

            request = request.clone({

                setHeaders: {

                    Authorization: `Bearer ${ localStorage.getItem('token') }`

                }

            });

        }

        return next.handle(request);

    }

}
