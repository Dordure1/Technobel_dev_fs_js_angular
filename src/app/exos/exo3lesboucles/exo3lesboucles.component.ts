import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo3lesboucles',
  templateUrl: './exo3lesboucles.component.html'
})
export class Exo3lesbouclesComponent implements OnInit {
   totPirce : number  =0
   VAT : number = 0 

  productList : {name:string, desc : string, price: number} [] =
  [
    {name : "Pomme" , desc : "Pommes bio belges", price : 1.25},
    {name : "Banane" , desc : "banane provenant d'espagne", price : 1.25},
    {name : "Kiwi" , desc : "Kiwi 100% belges, je vous jure!", price : 1.25}

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
      }
    }
    
    )

    if (check == 0)
    {
      this.myWallet.push({name : productName, quantity: 1, price:productPrice})
    }
    this.checktotprice()

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
          this.myWallet.splice(this.myWallet.indexOf(element)-1,1)
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
