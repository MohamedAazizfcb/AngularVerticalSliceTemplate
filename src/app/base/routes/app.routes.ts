import { Routes } from '@angular/router';
import { authenticationRoutes } from '../../features/authentication/authentication-routing';

export const routes: Routes = [
    {  
        path: 'auth', 
        children: authenticationRoutes 
    },
    // { 
    //     path: '', 
    //     redirectTo: '/auth/login', 
    //     pathMatch: 'full'
    // }
];
