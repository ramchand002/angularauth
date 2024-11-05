import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    debugger
    const token = localStorage.getItem('token');

    if (token) {
      this.router.navigate(['/admin/dashboard']);
      return false;
    } 

    return true;
  }
}
