import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const AuthenticationInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const accessToken = "AA";

    // Clone the request to add the Access Token Bearer header.
    const authReq = req.clone({
        setHeaders: {
        Authorization: `Bearer ${accessToken}`
        }
    });
    return next(authReq).pipe(
        catchError(error => {
            // Handle authentication error here (redirect to login)
            if (true) 
            {
                // this.authService.redirectToLogin(); // Method to handle redirection
            }
            return throwError(() => error); // Re-throw the error
        })
    );
};