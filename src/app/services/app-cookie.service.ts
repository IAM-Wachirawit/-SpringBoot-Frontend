import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AppCookieService {

  constructor(private cookieService: CookieService) { }

  //Set token
  setAccessToken(token: string) {
    this.cookieService.set('ACCESS_TOKEN', token);
  }

  //Get token
  getAccessToken() {
    return this.cookieService.get('ACCESS_TOKEN');
  }

  //Delete token
  deleteAccessToken() {
    return this.cookieService.delete('ACCESS_TOKEN');
  }

  //Check token มีไหม
  hasAccessToken(): boolean {
    return this.cookieService.check('ACCESS_TOKEN');
  }

  
  
}
