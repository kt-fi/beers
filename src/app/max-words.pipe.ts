import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxWords'
})
export class MaxWordsPipe implements PipeTransform {

  transform(value: string, maxLetters: number): unknown {

    return value.slice(1, maxLetters) + '...';
  }

}
