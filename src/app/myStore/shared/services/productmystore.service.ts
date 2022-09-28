import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct.model';

@Injectable({
  providedIn: 'root'
})
export class ProductmystoreService {

  constructor() { }

 getOneById(idProd : number) : Promise<IProduct>{
    return this.getData().then((allDatas) => {
      let tmpArray = allDatas.filter(prod => prod.id == idProd)
      let product = tmpArray[0]
      return product
    })
  }

  getData():Promise<IProduct[]>{
    return new Promise((resolve,reject)=>{
      let listeProduct : IProduct[]= []
      setTimeout(()=>{
        listeProduct = [
          {name:"smartphone", id :1 , price : 600, categId : 1},
          {name:"Iphone10", id :2 , price : 900, categId : 1},
          {name:"Iphone11", id :3 , price : 100, categId : 1},
          {name:"Iphone12", id :4 , price : 1100, categId : 1},
          {name:"Iphone13", id :5 , price : 1300, categId : 1},
          {name:"McBook1", id :6 , price : 1090, categId : 2},
          {name:"McBook2", id :7 , price : 1002, categId : 3},
          {name:"McBook3", id :8 , price : 2000, categId : 3},
          {name:"Souris", id :9 , price : 10, categId : 4},
          {name:"Clavier", id :10 , price : 15, categId : 4},
        ]
        resolve(listeProduct)
      },100)
    })
   }
}
