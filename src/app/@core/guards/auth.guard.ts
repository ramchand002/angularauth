import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    debugger
    const token = localStorage.getItem('token'); 

    if (token) {
      return true;
    }

    const returnUrl = segments.map((s) => s.path).join('/');

  //  const { root, signIn } = ROUTER_UTILS.config.auth;

    this.router.navigate(['/', 'login'], {
      queryParams: { returnUrl },
    });

    return false;
  }
}
