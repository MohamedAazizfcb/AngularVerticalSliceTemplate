import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { EnvironmentService } from "../services/environment.service";

@Injectable()
export class AppIdInterceptor implements HttpInterceptor {
  constructor(private envService: EnvironmentService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const appId = this.envService.getAppId();

    // Clone the request and add the APPID header
    const clonedReq = req.clone({
      headers: req.headers.set('APPID', appId)
    });

    return next.handle(clonedReq);
  }
}
