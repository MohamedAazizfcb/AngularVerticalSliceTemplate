import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify request headers or handle requests here
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer YOUR_TOKEN_HERE`
      }
    });
    return next.handle(clonedReq);
  }
}