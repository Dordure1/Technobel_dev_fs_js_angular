import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempfareneigth'
})
export class TempfareneigthPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let nbKelvin = value 

    let nbFar = (nbKelvin-253.15)*(9/5)+32

    let output = `la conversion de ${nbKelvin} Kelvin en farenheit est de ${nbFar}`
    
    return output;
  }

}
