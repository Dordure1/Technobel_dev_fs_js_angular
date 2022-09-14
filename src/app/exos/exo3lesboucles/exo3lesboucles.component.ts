import { Component, OnInit } from '@angular/core';
import {ToastType, displayToast} from 'src/app/shared/toast';

@Component({
  selector: 'app-exo3lesboucles',
  templateUrl: './exo3lesboucles.component.html'
})
export class Exo3lesbouclesComponent implements OnInit {
   totPirce : number  =0
   VAT : number = 0 

  productList : { imageLink:string, name:string, desc : string, price: number} [] =
  [
    {imageLink: "assets/imgPomme.jpg" , name: "Pomme" , desc : "Pommes bio belges", price : 1.25},
    {imageLink: "assets/imgBanane.jpg",name : "Banane" , desc : "banane provenant d'espagne", price : 1.25},
    {imageLink:"assets/imgKiwi.png" ,name : "Kiwi" , desc : "Kiwi 100% belges, je vous jure!", price : 1.25}
  ]

  myWallet : {name:string , quantity:number, price:number}[]=
  [

  ]

  constructor() { }

  ngOnInit(): void {
  }

  addInChar(productName:string, productPrice:number ){
    let check = 0 
    this.myWallet.forEach(element => 
     { 
        if(element.name == productName)
        {
          check =1 
          element.quantity =  element.quantity+ 1
          element.price = element.price + productPrice
          
          this.productList.forEach(element2=>{
            if(element2.name == element.name)
            {
              displayToast(`${element.name} added to chart`, `${element2.imageLink}`, ToastType.Success)
            }

          })
        }
      }
    
    )
    if (check == 0)
    {
      this.myWallet.push({name : productName, quantity: 1, price:productPrice})
      
      this.productList.forEach(element2=>{
        if(element2.name == productName)
        {
          displayToast(`${productName} added to chart`, `${element2.imageLink}`, ToastType.Success)
        }
  
      })
    
    this.checktotprice()
  
    }
  }


removeFromChar(productName:string, productPrice:number){

    this.myWallet.forEach(element => 
     { 
      if(element.name == productName)
      { if (element.quantity>1)
        {
          element.quantity =  element.quantity- 1
          element.price= element.price - productPrice
        }
        else 
        {
          this.myWallet.splice(this.myWallet.indexOf(element),1)
        }
      }
    }
    )
    this.checktotprice()
  
    }
  
  checktotprice(){
    this.VAT =0 
    this.totPirce =0 

    this.myWallet.forEach(element => {
      this.VAT = this.VAT + (element.price*0.21)
      this.totPirce = this.totPirce+ element.price + this.VAT
     })
  }  
}
