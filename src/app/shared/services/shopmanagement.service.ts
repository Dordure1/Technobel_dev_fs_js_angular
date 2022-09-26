import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopmanagementService {
  productList:{imageLink:string , name : string, description:string, price : number }[] = [
    {imageLink:"assets/imgPomme.jpg", name: "Pomme", description:"Pommes Bio Belge", price:2},
    {imageLink:"assets/imgBanane.jpg", name: "Banane", description:"Banane espagnole", price:2},
    {imageLink:"assets/imgKiwi.png", name: "Kiwi", description:"kiwi exotique", price:2}
  ]
  myWallet: {name: string, quantity :number, price : number}[] = []

  constructor() { }
  

  addToChar(name:string,price:number){
 
    const p =  this.myWallet.find((el)=>el.name == name)
    if(p)
    {
      p.quantity ++
    }
    else
    {
      let newProduct = this.productList.find((el) => el.name == name)
      let price = newProduct.price
      this.myWallet.push({name:name,quantity:1,price:price})
    }
  }


  removeFromChar(name:string,price:number){
    const p =  this.myWallet.find((el)=>el.name == name)
    if(p)
    {
      if(p.quantity>1)
      {
        p.quantity--
      }
      else
      {
        this.myWallet = [...this.myWallet.filter((el)=>el.name !=name)]
        console.log(this.myWallet)
      }
    }
  }
}
