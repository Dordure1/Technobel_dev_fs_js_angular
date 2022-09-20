import { Component, OnInit } from '@angular/core';
import { ShopmanagementService } from 'src/app/shared/services/shopmanagement.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html'
})
export class PanierComponent implements OnInit {
  myWallet: {name: string, quantity :number, price : number}[] = []

  constructor(private shopManagementService : ShopmanagementService) {}


  ngOnInit(): void {
    this.myWallet = this.shopManagementService.myWallet
  }


}
