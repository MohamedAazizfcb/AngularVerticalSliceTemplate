import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { LoggerService } from "../services/logger.service";
import { ToastrService } from "../services/toastr.service";

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(
    private logService: LoggerService,
    private toastrService: ToastrService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // Log the error
        this.logService.error(`Error(${ error.status }) is intercepted with the message: ${ error.message }`);

        // Show user-friendly message
        this.toastrService.showError(error.message);

        // Return an observable with the error to use if needed
        return throwError(() => error);
      })
    );
  }
}
