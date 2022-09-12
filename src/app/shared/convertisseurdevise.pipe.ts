import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertisseurdevise'
})
export class ConvertisseurdevisePipe implements PipeTransform {


  /// if arg[0] = US --> Dollar
  /// if agr[0] = CA --> Dollar Canadian
  // if arg[O]= CN --> Yen
  transform(value: number, ...args: any[]): string {
    let nb = value
    let newValue = 0
    let output = ""
    let EuroDollar = 1.2
    let EuroCA = 2.4
    let EuroCN = 7

    if(args[0]=="US")
    {
      newValue = nb*EuroDollar
      output =`${newValue}`
      //US`
    }
    if(args[0]=="CA")
    {
      newValue = nb*EuroCA
      output =`${newValue}`
      //CAD`
    }

    if(args[0]=="CN")
    {
      newValue = nb*EuroCN
      output =`${newValue}`
      //Yen`
    }

    return output;
  }

}
