import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name : 'concaten'
})
export class ConcatPipe implements PipeTransform{
  all: string='';


  transform(value: string, ...args: string[]) {
    console.log(...args);
    args.forEach(x => { this.all += x });
    let returne: string = value.concat(this.all)
    //this.all = '';
    return returne;
    
    }

}
