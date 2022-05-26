import { Pipe, PipeTransform } from '@angular/core';
import { Speaker } from 'src/app/_Model/speaker';

@Pipe({
  name: 'filterSpeakerUsername'
})
export class FilterSpeakerUsernamePipe implements PipeTransform {

  transform(value: Speaker[], filtertxt:string): Speaker[] {
    let filtered:Speaker[]= [];
    for (const item of value) {
      if(item.username.includes(filtertxt))
        filtered.push(item);
    }
    return filtered;
  }

}
