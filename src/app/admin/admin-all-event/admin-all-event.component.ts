import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/_Model/event';
import { Eventervice } from 'src/app/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-all-event',
  templateUrl: './admin-all-event.component.html',
  styleUrls: ['./admin-all-event.component.css']
})
export class AdminAllEventComponent implements OnInit {

  events:Event[]=[];
  searchTxt:string = "";
  constructor(public eventSrv:Eventervice, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.eventSrv.getEvents().subscribe(
      data=>{
        
        this.events = data.data;
      },
      error=>{
        alert(error.error.message);}
    );
  }

  deleteEvent(event:Event){
    if(confirm(`delete Event: ${event.title}?`)){
      this.eventSrv.deleteEventByID(event._id).subscribe(
        data=>{
         
          if(data.message.includes("delete")){
            alert("Event Got Deleted!");
            this.ngOnInit();
          }
        },
        error=>{
          alert(error.error.message);
        }
      );
    }
  }

}
