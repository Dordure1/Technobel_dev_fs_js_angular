import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromiseDemo14AsyncAwaitService {
  private varTestAsync: number = 0 
  constructor() { }

  
  // ngOnInit(): void {
  //   // this.varTestAsync=1
  //   // console.log(1)
    
  //   // setTimeout(()=>{
  //   //   console.log(2)
  //   // },1000)
    
  //   // console.log(3)
    
  // }

    // structure d'une promess ! 
    // resolve déclanche le then, reject déclanche le catch
    simplePromise(){

      new Promise((resolve,reject)=> {
        for(let i =0 ; i<100;i++)
        {
          /// 42 avant 
          if (this.varTestAsync ==1000)
          {
            /// attention à la chronologie , si on arrète pas la boucle for, il écécute toute la boucle avant de passer dans le then.
            resolve("promesse exécutée avec succès")
            break;
          }
          this.varTestAsync ++
        }

        reject("promesse non temrinée")
      })
      .then ((result)=>{
        console.log(result)
        console.log("ok j'ai réussi ma promesse")
      })
      .catch((error)=>{
        console.log(error)
        console.log("not ok")
      })

      console.log(this.varTestAsync)

    }

    

/// second example de promesse
    ReturnedsimplePromise(): Promise<string> {
      return new Promise((resolve,reject)=> {
          setTimeout(()=>{
            resolve("promesse exécutée avec succès")

          },1000)
          })
    }    


    /// promise all, toute les promesse ou rien ! 

    returnPrimisesAll():Promise <any>{
      let promise1 = new Promise<string>((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Resolve Promise 1 from promise ALl")
        },1500)
      })
      
      let promise2 = new Promise<string>((resolve,reject)=>{
        setTimeout(()=>{
          //resolve("Resolve Promise 2")
          reject("rejected promise 2 from promise ALl")
        },2500)

      })
      
      let promise3 = new Promise<string>((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Resolve Promise 3 from promise ALl")
        },3500)

      })
      return Promise.all([promise1, promise2, promise3])

    }


/// race, renvoie uniquement la première promesse réussie
    returnPrimisesRace():Promise <any>{
      let promise1 = new Promise<string>((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Resolve Promise 1 for promice Race")
        },1500)
      })
      
      let promise2 = new Promise<string>((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Resolve Promise 2 for promise Race")
          // reject("rejected promise 2")
        },2500)

      })
      
      let promise3 = new Promise<string>((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Resolve Promise 3 for promise Race")
        },3500)

      })
      return Promise.race([promise1, promise2, promise3])

    }



    
    returnPrimisesAllSettled():Promise <any>{
      let promise1 = new Promise<string>((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Resolve Promise 1 from promise ALlSetled")
        },1500)
      })
      
      let promise2 = new Promise<string>((resolve,reject)=>{
        setTimeout(()=>{
          //resolve("Resolve Promise 2")
          reject("rejected promise 2 from promise ALlSetled")
        },2500)

      })
      
      let promise3 = new Promise<string>((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Resolve Promise 3 from promise ALlSetled")
        },3500)

      })
      return Promise.allSettled([promise1, promise2, promise3])

    }
}
