import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FakeloginService } from '../services/fakelogin.service';
import { Toast } from '../toasts/MaterializeToasts';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  isConnected :boolean = false
  constructor(private fakeLogin : FakeloginService){

  }

  canActivate(): Observable<boolean> | Promise<boolean > | boolean  {

    /// si renvoie true, je peux voir la page, si renvoie false, cette page est innacessible
    this.isConnected = this.fakeLogin.isConnected
    if(this.isConnected){
      return true;
    }
    else
    {
      Toast.notLogged()
      /// attention ca ne marche pas , cela devrait rediriger vers la page sevrice/diService
      /// voir demos prof
      ///this.Router.navigate(["/demos/diService"])
      return false
    }
  }
  
}
