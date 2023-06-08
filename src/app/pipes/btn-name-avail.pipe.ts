import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btnNameAvail'
})
export class BtnNameAvailPipe implements PipeTransform {

  transform(value: string, nameBtn: boolean): string {

    return nameBtn? 'Add' : 'Ended';
  }

}
