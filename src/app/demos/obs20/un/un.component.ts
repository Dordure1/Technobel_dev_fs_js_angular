import { Component, OnInit, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakeLoginServicesService } from '../services/fake-login-services.service';

@Component({
  selector: 'app-un',
  templateUrl: './un.component.html'
})
export class UnComponent implements OnInit {
  isConnect : boolean = false
  subIsConnect : Subscription = new Subscription
  subInterval: Subscription = new Subscription

  constructor(private loginServeObs : FakeLoginServicesService) { }

  ngOnInit(): void {
    this.loginServeObs.$isConnect.subscribe((isConnect:boolean)=>{
      this.isConnect = isConnect
    })
  }

ngOnDestroy():void {
  this.subIsConnect.unsubscribe()
  console.log("on detroy")
}

  login(){
    this.loginServeObs.login()
  }
  logout(){
    this.loginServeObs.logout()

  }
}
