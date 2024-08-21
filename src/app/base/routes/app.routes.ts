import { Routes } from '@angular/router';
import { authenticationRoutingModel } from '../../features/authentication/application/routing/authentication-routing';

export const routes: Routes = [
    {  
        path: authenticationRoutingModel.parentRoute, 
        children: authenticationRoutingModel.featureRoutes 
    },
    { 
        path: '', 
        redirectTo: `/${authenticationRoutingModel.parentRoute}/${authenticationRoutingModel.featureRoutesWithLabels.login.route}`, 
        pathMatch: 'full'
    }
];
