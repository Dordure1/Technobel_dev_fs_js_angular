import { Component, OnInit } from '@angular/core';
import { FakeLoginServicesService } from '../services/fake-login-services.service';

@Component({
  selector: 'app-deux',
  templateUrl: './deux.component.html'
})
export class DeuxComponent implements OnInit {
isConnect : boolean = false
  constructor(private fakeLoginServe : FakeLoginServicesService) { }

  ngOnInit(): void {
    this.fakeLoginServe.$isConnect.subscribe((isConnect : boolean)=>{
      this.isConnect = isConnect
    })
  }

}
