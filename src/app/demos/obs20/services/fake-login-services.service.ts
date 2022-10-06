import { HttpClient } from '@angular/common/http';
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
  $interval : Subject<number> = new Subject<number>()
  interval : any

  constructor(private client : HttpClient) {}

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

  set_interval()
  {
      if(this.interval == undefined)
      {
          let i = 0
          this.interval = setInterval(() => {
              i ++ 
              this.$interval.next(i)
          }, 1000)
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
