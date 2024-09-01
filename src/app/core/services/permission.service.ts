import { Injectable } from '@angular/core';
import { UserRolesEnum } from '../enums/user-role.enum';
import { AppPermissionsEnum } from '../enums/app-permissions.enum';
import { USER_ROLE_PERMISSIONS } from '../constants/user-role-permissions.const';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private userPermissions: Set<string> = new Set();
  private currentUserRole: UserRolesEnum = UserRolesEnum.Guest; // Default to Guest

  constructor() {}

  // Set user permissions explicitly
  setPermissions(permissions: AppPermissionsEnum[]): void {
    this.userPermissions = new Set(permissions);
  }

  // Check if the user has a specific permission
  hasPermission(permission: AppPermissionsEnum): boolean {
    // Check if the permission is either role-based or explicitly set
    return USER_ROLE_PERMISSIONS[this.currentUserRole].includes(permission) || this.userPermissions.has(permission);
  }

  // Set the current user role
  setUserRole(role: UserRolesEnum): void {
    this.currentUserRole = role;
  }

  // Get the current user role
  getUserRole(): UserRolesEnum {
    return this.currentUserRole;
  }
}