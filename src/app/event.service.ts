import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from './_Model/event';
@Injectable({
  providedIn: 'root'
})
export class Eventervice {

  baseURL="http://localhost:6565/events/";

  constructor(public http:HttpClient) { }
  getEventByID(id:number){
    return this.http.get<{message:string, data:Event}>(this.baseURL + id);
  }

  getEvents(){
    return this.http.get<{message:string, data:Event[]}>(this.baseURL);
  }

  deleteEventByID(id:number){
    return this.http.delete<{message:string}>(this.baseURL + id);
  }
  updateEvent(id:number, event:Event){
    
    let AddedEvent={
      id: id,
      title: "",
      date: "",
      mainSpeakerID: "",
      otherSpeakersID: [""],
      studentsID: [0]
    };
    AddedEvent.title = event.title;
    AddedEvent.date = event.date;
    AddedEvent.mainSpeakerID = event.mainSpeakerID._id;
    AddedEvent.otherSpeakersID.pop();
    event.otherSpeakersID.forEach(os=>{
      AddedEvent.otherSpeakersID.push(os._id);
    });
    AddedEvent.studentsID.pop();
    event.studentsID.forEach(s=>{
      AddedEvent.studentsID.push(s._id);
    });
    return this.http.put<{message:string, data:Event[]}>(this.baseURL ,AddedEvent);
  }
  addEvent(event:Event){
    
    let AddedEvent={
      
      title: "",
      date: "",
      mainSpeakerID: "",
      otherSpeakersID: [""],
      studentsID: [0]
    };
    AddedEvent.title = event.title;
    AddedEvent.date = event.date;
    AddedEvent.mainSpeakerID = event.mainSpeakerID._id;
    AddedEvent.otherSpeakersID.pop();
    event.otherSpeakersID.forEach(os=>{
      AddedEvent.otherSpeakersID.push(os._id);
    });
    AddedEvent.studentsID.pop();
    event.studentsID.forEach(s=>{
      AddedEvent.studentsID.push(s._id);
    });
    return this.http.post<{message:string, events:Event[]}>(this.baseURL ,AddedEvent);
  }
}
