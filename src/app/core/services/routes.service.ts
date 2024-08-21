import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {
    constructor(
        private router: Router
    )
    {}
    
    getNavigationRoute = (): string[] => {
        return [""];
    }

    navigateToRouteBy = (): void => {
        this.router.navigate([]);
    }
}
