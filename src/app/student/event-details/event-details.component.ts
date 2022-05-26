import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Eventervice } from 'src/app/event.service';
import { Event } from 'src/app/_Model/event';
import { Speaker } from 'src/app/_Model/speaker';



@Component({
  selector: 'app-event-details',
  templateUrl:'./event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventID:number=0;
  event:Event=new Event(0,""," ",new Speaker("","","","",{city:"",street:"",building:""}),[],[]);

  constructor(public eveSrv:Eventervice, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.eventID = this.ar.snapshot.params['id'];
    this.eveSrv.getEventByID(this.eventID).subscribe(a=>this.event = a.data);
  }
}
