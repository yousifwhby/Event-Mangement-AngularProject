import { Component, OnInit } from '@angular/core';
import { Speaker } from 'src/app/_Model/speaker';
import { Student } from 'src/app/_Model/student';
import { Event } from 'src/app/_Model/event';
import { StudentService } from 'src/app/student.service';
import { SpeakerService } from 'src/app/speaker.service';
import { Eventervice } from 'src/app/event.service';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-admin-edit-event',
  templateUrl: './admin-edit-event.component.html',
  styleUrls: ['./admin-edit-event.component.css']
})
export class AdminEditEventComponent implements OnInit {

  eventID:number=0;
  event:Event = new Event(0,"","",new Speaker("","","","",{city:"",street:"",building:""}),[], []);


  date:string="15-12-2022";

  errorMsg:string="";
  successMsg:string="";

  showMainSpeaker:boolean=false;
  showAllSpeakers:boolean=false;
  showAllStudents:boolean=false;

  allStudents:Student[]=[];
  allSpeakers:Speaker[]=[];
  constructor(public EventSrv:Eventervice, public stdSrv:StudentService, public speakerSrv:SpeakerService, public ar:ActivatedRoute, public router:Router) { }

  ngOnInit() {
    // get the selected event
    this.eventID = this.ar.snapshot.params['id'];
    this.EventSrv.getEventByID(this.eventID).subscribe(
      data=>{
        
        this.event = data.data;
        this.event.date = this.event.date.split('T')[0];
        
      },
      error=>{
        alert(error.error.message);}
    );
    // get all students
    this.stdSrv.getAllStudent().subscribe(
      data=>{
        
        this.allStudents = data.data;
      },
      error=>{
        alert(error.error.message);}
    );
    // get all speakers
    this.speakerSrv.getAllSpeaker().subscribe(
      data=>{
       
        this.allSpeakers = data.data;
      },
      error=>{
        alert(error.error.message);}
    );
  }

  update(){
    if(!this.event.title || !this.event.date || !this.event.mainSpeakerID)
    {
      this.errorMsg = "please fill the form";
      setTimeout(()=>{
        this.errorMsg = "";
      },3000);
    }else{
        this.EventSrv.updateEvent(this.event._id,this.event).subscribe(
          data=>{
            
            if(data.message.includes("updated")){
              this.successMsg = "info updated successfully";
              setTimeout(()=>{
                this.router.navigateByUrl("/admin/events");
              },2000);
            }
          },
          error=>{
            this.errorMsg = error.error.message;
            setTimeout(()=>{
              this.errorMsg = "";
            },3000);
          }
        );
    }
  }

  showMainnSpeaker(){
    this.showMainSpeaker = !this.showMainSpeaker? true:false;
    this.showAllSpeakers=false;
    this.showAllStudents=false;
  }
  showSpeakers(){
    this.showAllSpeakers = !this.showAllSpeakers? true:false;
    this.showAllStudents=false;
    this.showMainSpeaker=false;
  }
  showStudents(){
    this.showAllStudents = !this.showAllStudents? true:false;
    this.showAllSpeakers=false;
    this.showMainSpeaker=false;
  }

  addSpeaker(id:string){
    // adding the main speaker
    if(this.showMainSpeaker){
      let newMainSpeaker:Speaker;
      this.speakerSrv.getSpeakerByID(id).subscribe(
        data=>{
          // console.log(data.data);
          newMainSpeaker = data.data;
          if(newMainSpeaker._id == "0"){
            alert("this speaker is currently unavailable!");
          }
          else{
            this.event.mainSpeakerID = newMainSpeaker;
          }
        },
        error=>{
          alert(error.error.message);}
      );
    }else{
      let newSpeaker:Speaker;
      // adding other speakers
      this.speakerSrv.getSpeakerByID(id).subscribe(
        data=>{
          
          newSpeaker = data.data;
          if(newSpeaker._id == "0"){
            alert("this speaker is currently unavailable!");
          }else{
            if(this.event.mainSpeakerID._id == newSpeaker._id)
              alert("this is the main speaker already");
            else
              this.event.otherSpeakersID.push(newSpeaker);
          }
        },
        error=>{
          alert(error.error.message);}
      );
    }
  }
  removeSpeaker(i:number){
    this.event.otherSpeakersID.splice(i,1);
  }

  addStudent(id:number){
    let newStudent:Student;
    this.stdSrv.getStudentByID(id).subscribe(
      data=>{
        
        newStudent = data.data;
        if(newStudent._id == 0){
          alert("this student is currently unavailable!");
        }else{
          this.event.studentsID.push(newStudent);
          console.log(this.event);
        }
      },
      error=>{
        alert(error.error.message);}
    );
  }
  removeStudent(i:number){
      this.event.studentsID.splice(i,1);
  }

}
