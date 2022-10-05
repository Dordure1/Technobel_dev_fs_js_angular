import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeLoginServicesService {
  static login() {
    throw new Error('Method not implemented.');
  }
isConnect: boolean = false
$isConnect : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.verifyLogged())
  constructor() { }
  verifyLogged(){
    let tmpIsConnect = localStorage.getItem("isConnect")

    if(tmpIsConnect=="true")
    {
      this.isConnect = true
      return this.isConnect
      
    }else{
      return false
    }

  }

  login(){
    this.isConnect = true
    localStorage.setItem("isConnect","true")
    this.emit_isConnect()
  }
  logout(){
    this.isConnect = false
    localStorage.setItem("isConnect","false")
    this.emit_isConnect()
  }


  emit_isConnect(){
    this.$isConnect.next(this.isConnect)
  }
}
