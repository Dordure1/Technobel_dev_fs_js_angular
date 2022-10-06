import { Component, OnInit } from '@angular/core';
import { FakeLoginServicesService } from '../services/fake-login-services.service';
import { FakeProductServiceService } from '../services/fake-product-service.service';

@Component({
  selector: 'app-deux',
  templateUrl: './deux.component.html'
})
export class DeuxComponent implements OnInit {
isConnect : boolean = false
listProduct : any [] = []

  constructor(private fakeLoginServe : FakeLoginServicesService,
              private fakeProdObsServe : FakeProductServiceService) { }

  ngOnInit(): void {
    this.fakeLoginServe.$isConnect.subscribe((isConnect : boolean)=>{
      this.isConnect = isConnect
    
      if(this.isConnect ==true){
        this.fakeProdObsServe.getProductList().subscribe((listProduct : any) => {
          this.listProduct = listProduct
      })  
    }
  })}
}
