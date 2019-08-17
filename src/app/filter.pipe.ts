import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const filterString = args[0];
    const propertyName = args[1];
    const resultArray = [];

    if (value.length === 0 || filterString === '') {
      return value;
    }

    for (const item of value) {
      if (item[propertyName] === filterString) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
