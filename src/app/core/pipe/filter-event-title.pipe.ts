import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../../_Model/event';

@Pipe({
  name: 'filterEventTitle'
})
export class FilterEventTitlePipe implements PipeTransform {

  transform(value: Event[], filtertxt:string): Event[] {
    let filtered:Event[]= [];
    for (const item of value) {
      if(item.title.includes(filtertxt))
        filtered.push(item);
    }
    return filtered;
  }

}
