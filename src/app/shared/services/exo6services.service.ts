import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Exo6servicesService {


  textModified :string =""
  
  constructor() { }

  modifyText(textToModify:string):Promise<string> {
     return new Promise <string>((resolve,reject)=>{
        if(textToModify)
        {
          console.log(textToModify)
          this.textModified = textToModify.toUpperCase()
          resolve(this.textModified)
        }

      }
      
      
      )
  }

}
