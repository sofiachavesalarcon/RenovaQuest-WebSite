import { Inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";


// Auth Guard
const router = Inject(Router);

export const  canActivateGuard : CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
     if(sessionStorage.getItem('token') != null){
       return true;
     }else{
          router.navigateByUrl('/login');
           return false;
     }
}