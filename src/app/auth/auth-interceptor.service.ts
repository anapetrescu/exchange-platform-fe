import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
          setHeaders: {
            'Content-Type' : 'application/json; charset=utf-8',
            'Accept'       : 'application/json',
            'Authorization': `${localStorage.getItem("token")}`,
          },
        });
        return next.handle(req);
      }
}