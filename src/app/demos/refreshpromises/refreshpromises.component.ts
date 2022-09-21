import { Component, OnInit } from '@angular/core';
import { Refreshpromisesdemo13Service } from 'src/app/shared/services/refreshpromisesdemo13.service';

@Component({
  selector: 'app-refreshpromises',
  templateUrl: './refreshpromises.component.html'
})
export class RefreshpromisesComponent implements OnInit {

  varTestAsync : number = 0 
  messageServe:string =""
  constructor(private Refreshpromisesdemo13Service : Refreshpromisesdemo13Service) {

   }


  ngOnInit():void {
    this.varTestAsync=1
    console.log(1)
    this.Refreshpromisesdemo13Service.simplePromise()

    this.Refreshpromisesdemo13Service.ReturnedsimplePromise()
    .then((res:string)=>{
      this.messageServe = res
    })
    .catch((error:any)=>{
      //
    })


    this.Refreshpromisesdemo13Service.returnPrimisesAll()
    .then((res)=>{
      console.log(res)
    })
    .catch((error)=>{
      console.log(error)
    })

    this.Refreshpromisesdemo13Service.returnPrimisesRace()
    .then((res)=>{
      console.log(res)
    })
    .catch((error=>{
      console.log(error)
    }))


    this.Refreshpromisesdemo13Service.returnPrimisesAllSettled()
    .then((result)=>{
      console.log(result)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  //   setTimeout(()=>{
  //     console.log(2)
  //   },1000)
    
  //   console.log(3)
    


  //   // structure d'une promess ! 
  //   // resolve déclanche le then, reject déclanche le catch
  //       new Promise((resolve,reject)=> {
  //         for(let i =0 ; i<100;i++)
  //         {
  //           /// 42 avant 
  //           if (this.varTestAsync ==1000)
  //           {
  //             /// attention à la chronologie , si on arrète pas la boucle for, il écécute toute la boucle avant de passer dans le then.
  //             resolve("promesse exécutée avec succès")
  //             break;
  //           }
  //           this.varTestAsync ++
  //         }

  //         reject("promesse non temrinée")
  //       })
  //       .then ((result)=>{
  //         console.log(result)
  //         console.log("ok j'ai réussi ma promesse")
  //       })
  //       .catch((error)=>{
  //         console.log(error)
  //         console.log("not ok")
  //       })

  //       console.log(this.varTestAsync)
}


