import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/login/login.component';
import { SignUpComponent } from './presentation/signup/signup.component';
import { ForgetPasswordComponent } from './presentation/forget-password/forget-password.component';

export const authenticationRoutes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'signup', 
        component: SignUpComponent 
    },
    { 
        path: 'forget-password', 
        component: ForgetPasswordComponent 
    }
];