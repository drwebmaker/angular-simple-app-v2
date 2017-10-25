import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findPhone'
})
export class FindPhone implements PipeTransform {
  transform(phones: any, term: any): any {
    if (term === undefined) return phones;

    return phones.filter(function (phone) {
      for (let property in phone) {
        if (phone[property] === null) {
          continue;
        }
        if (phone[property].toString().toLowerCase().includes(term.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }
}
