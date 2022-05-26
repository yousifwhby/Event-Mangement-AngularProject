import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './_Model/student';
import { Event } from './_Model/event';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
baseURL="http://localhost:6565/students/";
eventURL="http://localhost:6565/students/events/";

  constructor(public http:HttpClient) { }
  getAllStudent()
  {
    return this.http.get<{message: string ,data: Student[]}>(this.baseURL);
  }
  addStudent(std:Student)
  {
    return this.http.post<{message:string,data:Student}>(this.baseURL,{email: std.Email, password: std.password});

  }
  getStudentByID(id:number)
  {
    return this.http.get<{message: string ,data: Student}>(this.baseURL + id);

  }
  updateSudent(id:number,std:Student)
  {
    return this.http.put<{message: string}>(this.baseURL,{
      id: id,
      email: std.Email,
      password: std.password
  });

  }
  deleteSudent(id:number)
  {
    return this.http.delete<{message: string}>(this.baseURL + id);

  }
  
  getEventsByStudentID(id:number){
    return this.http.get<{message:string, data:Event[]}>(this.eventURL + id);
  }
}
