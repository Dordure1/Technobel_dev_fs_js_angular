import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../shared/models/IProduct.model';
import { Product } from '../shared/models/Product.Model';
import { ProductmystoreService } from '../shared/services/productmystore.service';

@Component({
  selector: 'app-productdetailsstore',
  templateUrl: './productdetailsstore.component.html'
})
export class ProductdetailsstoreComponent implements OnInit {
  product : IProduct = new Product()

  constructor(private productServe : ProductmystoreService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let idProduct = this.activatedRoute.params.subscribe((params: any) => {
      this.getData(params.idProduct)
    })
    console.log(idProduct)
  }

  async getData(idProd : number){
    try{
      this.product = await this.productServe.getOneById(idProd)
    }
    catch(error){
      console.log(error)
    }
  }

}
