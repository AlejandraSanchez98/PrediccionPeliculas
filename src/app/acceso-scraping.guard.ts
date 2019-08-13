import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AccesoScrapingGuard implements CanActivate  {
  constructor(public router: Router){}
  canActivate(){
    if(window.localStorage.getItem("nombreUsuario")){
     return true;
   }
   else
   {
     this.router.navigate(['/home']);
     return false;
   }
  }

}
