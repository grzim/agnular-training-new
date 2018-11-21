import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutTo'
})
export class CutToPipe implements PipeTransform {

  transform(value: string, arg: number): any {
    return `${value.slice(0, arg)}...`;
  }

}
