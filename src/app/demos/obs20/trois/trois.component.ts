import { Component, OnInit } from '@angular/core';
import { FakeLoginServicesService } from '../services/fake-login-services.service';
import { FakeProductServiceService } from '../services/fake-product-service.service';

@Component({
  selector: 'app-trois',
  templateUrl: './trois.component.html'
})
export class TroisComponent implements OnInit {
  isConnect : boolean = false

  constructor(private fakeLoginServe : FakeLoginServicesService,
              private fakeProdObsServe : FakeProductServiceService) { }

  ngOnInit(): void {
    this.fakeLoginServe.$isConnect.subscribe((isConnect : boolean)=>{
      this.isConnect = isConnect


      this.fakeProdObsServe.getLetter().subscribe((res) => {
        console.log(res)
       /// merge Map
      })

      this.fakeProdObsServe.getCountry().subscribe((res) => {
        console.log(res)
        //// ZIP
      })

      this.fakeProdObsServe.getTemp().subscribe((res) => {
        console.log(res)
      })
  })}


}
