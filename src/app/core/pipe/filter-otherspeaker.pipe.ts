import { Pipe, PipeTransform } from '@angular/core';
import { Speaker } from 'src/app/_Model/speaker';

@Pipe({
  name: 'filterOtherspeaker',
  pure:false
})
export class FilterOtherspeakerPipe implements PipeTransform {

  transform(value: Speaker[], SpeakersinEvent:Speaker[]): Speaker[] {
    let SpeakersinEventIDs:string[]=[];
    let filteredArray:Speaker[] = [];
    for (let es of SpeakersinEvent) {
      SpeakersinEventIDs.push(es._id);
    }
    value.forEach(s=>{
      if(!SpeakersinEventIDs.includes(s._id))
        filteredArray.push(s);
    })
    return filteredArray;
  }
}
