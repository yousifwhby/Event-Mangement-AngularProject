import { Pipe, PipeTransform } from '@angular/core';
import { Student } from 'src/app/_Model/student';

@Pipe({
  name: 'filterStudents',
  pure:false
})
export class FilterStudentsPipe implements PipeTransform {

  transform(value: Student[], StudentinEvent:Student[]): Student[] {
    let StudentinEventIDs:number[]=[];
    let filteredArray:Student[] = [];
    // for (const se of StudentinEvent) {
    //   StudentinEventIDs.push(se.Email);
    //   console.log("🚀 ~ file: filter-students.pipe.ts ~ line 16 ~ FilterStudentsPipe ~ transform ~ es._id", se.password.toString())
    // }
    for (let i = 0; i < StudentinEvent.length; i++) {
      StudentinEventIDs.push( StudentinEvent[i]._id);
      
      console.log("🚀 ~ file: StudentinEvent", StudentinEvent[i].password);
    }
  
    value.forEach(s=>{
      if(!StudentinEventIDs.includes(s._id))
        filteredArray.push(s);
      })
      // console.log("🚀 ~ file:  filteredArray", filteredArray)
    return filteredArray;
  }

}
