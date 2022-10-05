import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  get isConnected():boolean {
    return localStorage.getItem('etat') =='true'
  }

  connectionSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnected)
  constructor() { }


  login() {
    //this.isConnected = true
    localStorage.setItem('etat', 'true')
    this.connectionSubject.next(this.isConnected)
  }

  logout() {
    //this.isConnected = false
    localStorage.clear()
    this.connectionSubject.next(this.isConnected)

  }
}
