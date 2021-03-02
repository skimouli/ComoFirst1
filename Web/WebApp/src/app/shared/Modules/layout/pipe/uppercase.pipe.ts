import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'UpperCase'
})
export class UpperCasePipe implements PipeTransform {
  transform(value: string) {
    return value.toLocaleUpperCase();
    }

}
