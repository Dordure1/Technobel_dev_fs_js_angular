import { Component, OnInit } from '@angular/core';
import { FakeLoginServicesService } from '../services/fake-login-services.service';

@Component({
  selector: 'app-trois',
  templateUrl: './trois.component.html'
})
export class TroisComponent implements OnInit {
  isConnect : boolean = false
  constructor(private fakeLoginServe : FakeLoginServicesService) { }

  ngOnInit(): void {
    this.fakeLoginServe.$isConnect.subscribe((isConnect : boolean)=>{
      this.isConnect = isConnect
  })}


}
