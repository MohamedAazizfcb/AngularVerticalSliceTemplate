import { Routes } from '@angular/router';
import { LoginComponent } from '../../presentation/login/login.component';
import { SignUpComponent } from '../../presentation/signup/signup.component';
import { FeatureRoutingModel } from '../../../../core/models/feature-routing.model';
import { RouteInfoModel } from '../../../../core/models/route-info.model';
import { ForgetPasswordComponent } from '../../presentation/forget-password/forget-password.component';

class AuthenticationRoutesWithLabelsModel
{
    login: RouteInfoModel= {route: "login", label_en: "login" , label_ar: "تسجيل الدخول"};
    signup: RouteInfoModel= {route: "signup", label_en: "signup" , label_ar: "تسجيل مستخدم جديد"};
    forgetPassword: RouteInfoModel= {route: "forget-password", label_en: "forget password" , label_ar: "نسيت كلمة المرور"};
};


const parentRoute: string = "auth";
const authenticationRoutesWithLabels = new AuthenticationRoutesWithLabelsModel();
const authenticationRoutes: Routes = [
    { 
        path: authenticationRoutesWithLabels.login.route, 
        component: LoginComponent,
    },
    { 
        path: authenticationRoutesWithLabels.signup.route, 
        component: SignUpComponent 
    },
    { 
        path: authenticationRoutesWithLabels.forgetPassword.route, 
        component: ForgetPasswordComponent 
    },
];

export const authenticationRoutingModel: FeatureRoutingModel<AuthenticationRoutesWithLabelsModel> = {
    parentRoute: parentRoute, 
    featureRoutesWithLabels: authenticationRoutesWithLabels,
    featureRoutes: authenticationRoutes
}