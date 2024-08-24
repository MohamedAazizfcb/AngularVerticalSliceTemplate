import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouteInfoModel } from '../models/route-info.model';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
    constructor(
        private router: Router
    )
    {}

    getRoutePath = (routeInfo: RouteInfoModel) : string => {
        return `/${routeInfo.parentRoute}/${routeInfo.routingObject.path}`
    }

    getNavigationRoute = (routeInfo: RouteInfoModel): string[] => {
        return [`/${routeInfo.parentRoute}`, routeInfo.routingObject.path?? ''];
    }

    navigateToRoute = (routeInfo: RouteInfoModel): void => {
        this.router.navigate(this.getNavigationRoute(routeInfo));
    }
}
