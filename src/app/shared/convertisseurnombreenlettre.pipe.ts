import { Pipe, PipeTransform } from '@angular/core';
import * as ntw from 'node_modules/number-to-words'

@Pipe({
  name: 'convertisseurnombreenlettre'
})
export class ConvertisseurnombreenlettrePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    
    let nb=value
    let output = ntw.toWords(nb)

    
    return output;
  }

}
