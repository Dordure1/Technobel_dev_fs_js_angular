import { Component, OnInit, Injectable } from '@angular/core';
import { FakeLoginServicesService } from '../services/fake-login-services.service';

@Component({
  selector: 'app-un',
  templateUrl: './un.component.html'
})
export class UnComponent implements OnInit {
  isConnect : boolean = false
  constructor(private loginServeObs : FakeLoginServicesService) { }

  ngOnInit(): void {
    this.loginServeObs.$isConnect.subscribe((isConnect:boolean)=>{
      this.isConnect = isConnect
    })
  }
  login(){
    this.loginServeObs.login()
  }
  logout(){
    this.loginServeObs.logout()

  }
}
