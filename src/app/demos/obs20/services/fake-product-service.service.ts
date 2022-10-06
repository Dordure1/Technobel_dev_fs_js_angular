import { Injectable } from '@angular/core';
import { filter, from, interval, map, mergeMap, Observable, of, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeProductServiceService {

  private productList : Product[] = [
    { id : 1, name : "iphone 13", priceNet : 800},
    { id : 2, name : "iphone 14", priceNet : 1600},
    { id : 3, name : "iphone 15", priceNet : 3200},
    { id : 4, name : "iphone 16", priceNet : 6400},
    { id : 5, name : "iphone 17", priceNet : 12800},
    { id : 6, name : "iphone 18", priceNet : 25600},
]

private $letterList : Observable<string> = of("a", "b", "c", "d", "e", "f")
private $listCountry : Observable<string> = from(["Strasbourg", "Paris", "Lyon"])
private $listTemp : Observable<number> = from([15, 25, 35, 41, 12, 18, 29])
private $intervalEmitLetter : Observable<number> = interval(1000)


private user : User = {
    id : 42, 
    name : "Jawad",
    tauxTVA : 12,
    remise : 2.5
}

  constructor() { }

  getLetter()
  {
      return this.$letterList.pipe(
          mergeMap(letter => this.$listCountry.pipe()),
          map(x => x)
      )
  }

  getTemp(){
      return this.$listTemp.pipe(
          filter(temp => temp < 20)
      )
  }

  getCountry(){
      return zip(
          this.$listCountry,
          this.$letterList,
          this.$intervalEmitLetter,
          this.$listTemp.pipe(
              filter(temp => temp < 20)
          )
      ).pipe(
          map(([Ville, Lettre, Timer, Temp]) => ({Ville, Lettre, Timer, Temp}))
      )
  }


  getProductList()
  {
      return this.httpC_get()
      .pipe(
          map((productList) => {

              productList.map((product) => {
                  let prixRemise = product.priceNet * ((this.user.remise / 100)) + 1
                  product.priceNet = (product.priceNet * ((this.user.tauxTVA /100) + 1)) - prixRemise
                  product.priceNet = Number.parseFloat(product.priceNet.toFixed(2))
                  return product
              })
              return productList         
          })
      )
  }

  httpC_get() : Observable<Product[]>{
      return new Observable((obs) => {
          obs.next(this.productList)
      })
  }

}


class Product{
  id : number = 0
  name : string = ""
  priceNet : number = 0
}

class User{
  id : number = 0
  name : string = "NC"
  tauxTVA : number = 21
  remise : number = 0
}