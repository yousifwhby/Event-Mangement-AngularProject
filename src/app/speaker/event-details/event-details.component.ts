import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Eventervice } from 'src/app/event.service';
import { Event } from 'src/app/_Model/event';
import { Speaker } from 'src/app/_Model/speaker';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class SpeakerEventDetailsComponent implements OnInit {

  eventID:number=0;
  event:Event=new Event(0,"","",new Speaker("","","","",{city:"",street:"",building:""}),[],[]);

  constructor(public EventSrv:Eventervice, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.eventID = this.ar.snapshot.params['id'];
    this.EventSrv.getEventByID(this.eventID).subscribe(
      data=>{
        
        this.event = data.data;
        // this.event.date = this.event.date.split('T')[0];
      },
      error=>{
        alert(error.error.message);}
    );
  }

}
