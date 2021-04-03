import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatMoon'
})
export class VatMoonPipe implements PipeTransform {

  transform(value: number, rate:number ): number {
    return value * 27 +(value*rate)/100;
  }

}
