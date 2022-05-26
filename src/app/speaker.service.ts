import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from './_Model/speaker';
import { Event } from './_Model/event';


@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  baseURL="http://localhost:6565/speakers/";
  eventURL="http://localhost:6565/speakers/events/";


  constructor(public http:HttpClient) { }
  getAllSpeaker()
  {
    return this.http.get<{message: string ,data: Speaker[]}>(this.baseURL);
  }
  addSpeaker(spe:Speaker)
  {
    return this.http.post<{message:string,data:Speaker}>(this.baseURL,{
      
      email: spe.Email, 
      password: spe.password,
      username: spe.username,
      address:{
        city: spe.address.city,
        street: spe.address.street,
        building: spe.address.building,
      }
    });

  }
  getSpeakerByID(id:string)
  {
    return this.http.get<{message: string ,data: Speaker}>(this.baseURL + id);

  }
  updateSpeaker(id:string, spe:Speaker)
  {
    return this.http.put<{message: string}>(this.baseURL,
      {
        id: id,
        email: spe.Email,
        username: spe.username,
        password: spe.password,
        address: {
            city: spe.address.city,
            street: spe.address.street,
            building: spe.address.building
        }
    });

  }
  deleteSpeaker(id:string){
    return this.http.delete<{message: string}>(this.baseURL + id);
  }
  getEventsBySpeakerID(id:string){
    return this.http.get<{message:string, data:Event[]}>(this.eventURL + id);
  }

}
