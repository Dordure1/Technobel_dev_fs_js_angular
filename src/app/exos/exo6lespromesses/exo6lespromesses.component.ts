import { Component, OnInit,OnChanges, SimpleChange, AfterViewChecked } from '@angular/core';
import { Exo6servicesService } from 'src/app/shared/services/exo6services.service';

@Component({
  selector: 'app-exo6lespromesses',
  templateUrl: './exo6lespromesses.component.html'
})
export class Exo6lespromessesComponent implements OnInit {
textToModify : string = ""
textModified: string  = ""

constructor(private exo6serivcepromise : Exo6servicesService) { }
  
  
  ngOnInit() :void {
    this.exo6serivcepromise.modifyText(this.textToModify)
    .then ((result)=>{
      console.log(result)
      this.textModified = result
      console.log(this.textModified)
    })
   
  }
  
/// boucles infinies
  // ngAfterViewChecked()
  // {
  //   this.exo6serivcepromise.modifyText(this.textToModify)
  //   .then((result:string)=>{
  //     this.textModified = result 
  //   })
  // }


/// avec bouton 
modifyText(textToModify:string){
  textToModify = this.textToModify
  this.exo6serivcepromise.modifyText(textToModify)
  .then((result:string)=>{
    this.textModified = result 
})
}
}
