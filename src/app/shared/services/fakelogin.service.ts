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
  }
  resister(){
    
    this.login()
  }
  logout(){
    this.isConnected= false

  }
}
