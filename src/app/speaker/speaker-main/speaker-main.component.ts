import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Event } from 'src/app/_Model/event';


@Component({
  selector: 'app-speaker-main',
  templateUrl: './speaker-main.component.html',
  styleUrls: ['./speaker-main.component.css']
})
export class SpeakerMainComponent implements OnInit {

  events:Event[]=[];
  speakerID:string = "";
  errMsg:string="";
  constructor(public speSrv:SpeakerService, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.speakerID = this.ar.snapshot.params['id'];
    this.speSrv.getEventsBySpeakerID(this.speakerID).subscribe(
      data=>{
        if(data.message.includes("no events")){
          this.errMsg = "No events assigned for you yet :)";
        }else{
          this.events = data.data;
        }
      },
      error=>alert(error.error.message)
    );
  }


}
