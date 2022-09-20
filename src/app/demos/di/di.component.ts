import { Component, OnInit } from '@angular/core';
import { FakeloginService } from 'src/app/shared/services/fakelogin.service';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html'
})
export class DiComponent implements OnInit {
  
  isConnected : boolean = false
  
  
  
  constructor(private fakeLoginService : FakeloginService) {}

  ngOnInit(): void {
    this.isConnected = this.fakeLoginService.isConnected
  }
  
  
  login(){
    this.fakeLoginService.login()
    this.isConnected= this.fakeLoginService.isConnected
  }
  register(){
    this.login()
  }
  logout(){
    this.fakeLoginService.logout()
    this.isConnected= this.fakeLoginService.isConnected
  }

}
