import {
  CanActivate, //interface
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { AuthService } from "./auth.service";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                return this.authService.isAuthenticated()
                .then((authenticated: boolean) => {
                  if (authenticated) {
                    return true
                  }
                  else {
                    return this.router.navigate(['/'])
                  }
                });
              }
    canActivateChild(route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state)   
      }
}