import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { LoggerService } from '../../application/implementations/logger.service';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

export function LoggingInterceptor(logger: LoggerService): HttpInterceptor {
  return {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const url = req.urlWithParams;
      logger.info(`HTTP Request: ${req.method} ${url}`);

      return next.handle(req).pipe(
        finalize(() => {
          // Log response completion
          logger.info(`HTTP Response: ${url} completed`);
        }),
        catchError(error => {
          // Log error
          logger.error(`HTTP Response Error: ${url} `, error);
          // Re-throw the error to allow further handling if needed
          return throwError(() => new Error(error));
        }),
      );
    }
  };
}
