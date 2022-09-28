import { Injectable } from '@angular/core';
import { Categ } from '../models/CategModel';
import { ICateg } from '../models/ICateg.model';

@Injectable({
  providedIn: 'root'
})
export class CategmystoreService {

  constructor() {
   }
   getData():Promise<ICateg[]>{
    return new Promise((resolve,reject)=>{
      let listeCateg : ICateg[]= []
      setTimeout(()=>{
        listeCateg = [
          {name:"Smartphone", id:1,desc:"es toutou qui achete les iphones à 2k"},
          {name:"mac", id:2,desc:"A 4k"},
          {name:"ordi fixe", id:3,desc:"wow c'est cher"},
          {name:"material gamer", id:4,desc:"GG"},
        ]
        resolve(listeCateg)
      },100)
    })
   }
}
