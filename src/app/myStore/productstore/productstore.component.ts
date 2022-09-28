import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../shared/models/IProduct.model';
import { ProductmystoreService } from '../shared/services/productmystore.service';

@Component({
  selector: 'app-productstore',
  templateUrl: './productstore.component.html'
})
export class ProductstoreComponent implements OnInit {
  listProduct : IProduct[] = []

  constructor(private productServe : ProductmystoreService, private activetedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe((params : any) => {
      this.getData(params["idCateg"])
      console.log(params.idCateg)
    })

  }

  async getData(idCateg : number){
    try{
      let tmp : IProduct[] = await this.productServe.getData()
      this.listProduct = tmp.filter(product => product.categId == idCateg)
    }
    catch(error){
      console.log(error)
    }
  }


  navigateToDetails(productId : number){

    console.log(this.router.url)
    this.router.navigate([this.router.url, "product", productId])
    //categ/:idCateg/product/:idProd
  }

}