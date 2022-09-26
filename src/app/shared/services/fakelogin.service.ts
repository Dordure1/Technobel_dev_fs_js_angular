import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeloginService {
  isConnected:boolean = false
  constructor() { 
  }
  login(){

    this.isConnected= true
    /// demo 16 local/session storage
    sessionStorage.setItem("isConnected", JSON.stringify(this.isConnected))
  }
  resister(){
    
    this.login()
  }
  logout(){
    this.isConnected= false
    /// demo 16 local/session storage
    sessionStorage.setItem("isConnected", JSON.stringify(this.isConnected))

  }

  refresh(){
/// demo 16 local sesion 
/// attention que la session est gérée par le navigateur et donc elle se dédruit à un moment donnée

// exemple la session est détruite quand on quitte le navigateur
/// le stockage local reste 
    let tmpLogged =sessionStorage.getItem("isConnected")
    if(tmpLogged)
    {
      this.isConnected = JSON.parse(tmpLogged)
    }

  }

}
