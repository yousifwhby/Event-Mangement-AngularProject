import { Pipe, PipeTransform } from '@angular/core';
import { first } from 'rxjs';
import { Student } from 'src/app/_Model/student';

@Pipe({
  name: 'filterStudentEmail'
})
export class FilterStudentEmailPipe implements PipeTransform {

  transform(value: Student[], filtertxt:string): Student[] {
    let filtered:Student[]= [];
    for (const item of value) {
      if(item.Email.includes(filtertxt))
        filtered.push(item);
    }
    return filtered;
  }
}
