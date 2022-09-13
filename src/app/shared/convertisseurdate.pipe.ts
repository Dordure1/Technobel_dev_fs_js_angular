import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertisseurdate'
})
export class ConvertisseurdatePipe implements PipeTransform {

  transform(value: number, ...args: any[]): String {
    let nbJour = 0
    let nbHeure = 0
    let nbMin =0
    let nbSec =0
    let output =""
    let newValue = value
    /// calcul nb jour
      if(newValue>= 86400)
      {
        nbJour = Math.floor(newValue/86400)
        newValue = newValue%86400
        /// conversion string
       
      }
      // clalcul nb Heure
      if(newValue>=3600)
      {
        nbHeure = Math.floor(newValue/3600)
        newValue = value%3600
      }
/// calcul nb minutes
      if(newValue>=60)
      {
        nbMin = Math.floor(newValue/60)
        newValue = value%60

        
      }

      nbSec = newValue

      if(nbJour<10)
      {
        output = `0${nbJour}:`
      }
      else 
      {
        output = `${nbJour}:`
      }


      if(nbHeure<10)
      {
        output = `${output}0${nbHeure}:`
      }
      else 
      {
        output = `${output}${nbHeure}:`
      }


      if(nbMin<10)
        {
          output = `${output}0${nbMin}:`
        }
        else 
        {
          output = `${output}${nbMin}:`
          
        }

        if(nbSec<10)
        {
          output = `${output}0${nbSec}`
        }
        else 
        {
          output = `${output}${nbSec}:`
          
        }

    return output;
  }

}
