import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PermissionService } from '../services/permission.service';
import { UserRolesEnum } from '../enums/user-role.enum';
import { AppPermissionsEnum } from '../enums/app-permissions.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private permissionsService: PermissionService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const requiredRole = route.data['role'] as UserRolesEnum;
    const requiredPermission = route.data['permission'] as AppPermissionsEnum;

    if (requiredRole && this.permissionsService.getUserRole() !== requiredRole) {
      this.router.navigate(['/unauthorized']); // Navigate to unauthorized page
      return false;
    }

    if (requiredPermission && !this.permissionsService.hasPermission(requiredPermission)) {
      this.router.navigate(['/unauthorized']); // Navigate to unauthorized page
      return false;
    }

    return true;
  }
}