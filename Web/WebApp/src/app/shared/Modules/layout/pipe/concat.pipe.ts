import { Pipe, PipeTransform } from '@angular/core'



@Pipe({
    name : 'concat'
})

export class ConcatPipe implements PipeTransform {


  transform(value: string, param: string): string {
    return value.concat(param);
    }

}
