import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Eventervice } from 'src/app/event.service';
import { Student } from 'src/app/_Model/student';
import { Event } from 'src/app/_Model/event';
import { StudentService } from 'src/app/student.service';


@Component({
  selector: 'app-allstudet',
  templateUrl: './allstudet.component.html',
  styleUrls: ['./allstudet.component.css']
})
export class AllstudetComponent implements OnInit {
  events:Event[]=[];
  studentID:number = 0;
  errMsg:string="";
  constructor(public stdServ:StudentService, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.studentID = this.ar.snapshot.params['id'];
    this.stdServ.getEventsByStudentID(this.studentID).subscribe(
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
