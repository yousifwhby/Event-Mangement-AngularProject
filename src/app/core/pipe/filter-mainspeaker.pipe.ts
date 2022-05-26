import { Pipe, PipeTransform } from '@angular/core';
import { Speaker } from 'src/app/_Model/speaker';

@Pipe({
  name: 'filterMainspeaker',
  pure:false
})
export class FilterMainspeakerPipe implements PipeTransform {

  transform(value: Speaker[],mainSpeaker:Speaker): Speaker[] {
    let filteredArray:Speaker[]= [];
    for (let speaker of value) {
      if(speaker._id != mainSpeaker._id)
        filteredArray.push(speaker);
    }
    return filteredArray;
  }

}
