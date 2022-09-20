import { Component, OnInit } from '@angular/core';
import { ShopmanagementService } from 'src/app/shared/services/shopmanagement.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {
  productList:{imageLink:string , name : string, description:string, price : number }[] =[]


  constructor(private shopManagementService : ShopmanagementService) {}


  ngOnInit(): void {
    this.productList = this.shopManagementService.productList
  }

  addInChar(name:string , price:number){
    this.shopManagementService.addToChar(name,price)

  }
  
  removeFromChar(name:string , price:number){
    this.shopManagementService.removeFromChar(name,price)
  }



}
