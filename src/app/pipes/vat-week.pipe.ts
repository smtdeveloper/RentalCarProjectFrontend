import { createViewChild } from '@angular/compiler/src/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatWeek'
})
export class VatWeekPipe implements PipeTransform {

  transform(value: number, rate:number): number {
    return value * 6 +(value*rate)/100;
  }

}
