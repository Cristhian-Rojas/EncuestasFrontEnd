import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeEmail'
})
export class RemoveEmailPipe implements PipeTransform {

  transform(value: string): string {
    const index = value.indexOf('@');
    if (index > -1) {
      return value.substring(0, index);
    } else {
      return value;
    }
  }

}
