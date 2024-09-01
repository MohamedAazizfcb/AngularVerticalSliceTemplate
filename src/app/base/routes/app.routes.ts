import { Route, Routes } from '@angular/router';
import { authenticationRoutingObject }  from '../../features/authentication/authentication-routing';
import { RouteInfoModel } from '../../core/models/route-info.model';


const generateRoutesFromRoutingModel = (routingModel:  { [key : string]: RouteInfoModel }): Routes => {
    const routeInfoArray: RouteInfoModel[] = Object.values(routingModel);
    return routeInfoArray.map(
        (routeInfo: RouteInfoModel): Route => {
            return routeInfo.routingObject;
        }
    );
};

export const routes: Routes = [
    {  
        path: authenticationRoutingObject.parentRoute, 
        children: generateRoutesFromRoutingModel(authenticationRoutingObject.routes) 
    },
    { 
        path: 'unauthorized', 
        redirectTo: `/${authenticationRoutingObject.parentRoute}/${authenticationRoutingObject.routes.login.routingObject.path}`, 
        pathMatch: 'full'
    },
    { 
        path: '', 
        redirectTo: `/${authenticationRoutingObject.parentRoute}/${authenticationRoutingObject.routes.login.routingObject.path}`, 
        pathMatch: 'full'
    },
    { 
        path: '**', 
        redirectTo: `/${authenticationRoutingObject.parentRoute}/${authenticationRoutingObject.routes.login.routingObject.path}`, 
        pathMatch: 'full'
    }
];