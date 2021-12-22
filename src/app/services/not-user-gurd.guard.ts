import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotUserGurdGuard implements CanActivate {

  constructor(private as : AuthService , private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.as.User.subscribe(user=>{
        console.log(user);
        if(user == null){
         return this.router.navigate(['/'])
        }
        else{
          return true;
        }

      })

    return true;
  }

}
