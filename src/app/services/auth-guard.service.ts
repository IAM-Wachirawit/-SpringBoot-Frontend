import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppCookieService } from './app-cookie.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  // Call Service เช็คคุณมี cookie ไหม
  constructor(
    private appCookieService: AppCookieService,
    private router: Router
    ) { } 

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if ( this.appCookieService.hasAccessToken() ) {
      return true;
    }

    //ถ้าไม่มี cookie ไม่ให้เข้าแล้วกลับไปหน้า login
    this.router.navigate(['/login']);
    return false;
  }
}
