import { Pipe, PipeTransform } from '@angular/core';
import { FormRecord } from '@angular/forms';

@Pipe({
  name: 'inversionNombre'
})
export class InversionNombrePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let nbInit = value
    let nbToString = nbInit.toString()

    
    let nbChiffre = nbToString.length
    let output=""
    let tableChiffre =[]
    let outputTab = []
    let i =0
    for(i=0; i<nbChiffre;i++)
    {
      tableChiffre[i] = nbToString[i]
      outputTab[nbChiffre-i] = tableChiffre[i]
    }
    
    output = outputTab.join('')
    return output;
  }

}
