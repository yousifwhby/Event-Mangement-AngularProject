import { Component, OnInit } from '@angular/core';
import { Speaker } from 'src/app/_Model/speaker';
import { Student } from 'src/app/_Model/student';
import { Event } from 'src/app/_Model/event';
import { StudentService } from 'src/app/student.service';
import { Eventervice } from 'src/app/event.service';
import { SpeakerService } from 'src/app/speaker.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-admin-add-event',
  templateUrl: './admin-add-event.component.html',
  styleUrls: ['./admin-add-event.component.css']
})
export class AdminAddEventComponent implements OnInit {

  event:Event = new Event(0,"","",new Speaker("","","","",{city:"",street:"",building:""}),[], []);

  errorMsg:string="";
  successMsg:string="";

  showMainSpeaker:boolean=false;
  showAllSpeakers:boolean=false;
  showAllStudents:boolean=false;

  allStudents:Student[]=[];
  allSpeakers:Speaker[]=[];
  constructor(public EventSrv:Eventervice, public stdSrv:StudentService, public speakerSrv:SpeakerService, public ar:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
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

  add():void{
    console.log(this.event);
    
    if(!this.event.title || !this.event.date || !this.event.mainSpeakerID)
    {
      this.errorMsg = "please fill the Form";
      setTimeout(()=>{
        this.errorMsg = "";
      },3000);
    }else{
        this.EventSrv.addEvent(this.event).subscribe(
          data=>{
            
            this.successMsg = "info updated successfully";
            setTimeout(()=>{
              this.router.navigateByUrl("/admin/events");
            },2000);
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
        newMainSpeaker = data.data;
        // console.log("🚀 ~ file: admin-add-event.component.ts ~ line 105 ~ AdminAddEventComponent ~ addSpeaker ~ newMainSpeaker", newMainSpeaker)
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
        // console.log("🚀 ~ file:  addStudent ~ newStudent", newStudent)
        
        if(newStudent._id == 0){
          alert("this speaker is currently unavailable!");
        }else{
          this.event.studentsID.push(newStudent);
          // console.log("🚀 ~ f AdminAddEventComponent ~ addStudent ~ event.studentsID", this.event.studentsID)
        }
      },
      error=>{
        alert(error.error.message);}
    );
  }
  removeStudent(i:number){
    // console.log("🚀 ~ file: admin-add-event.component.ts ~ line 161 ~ AdminAddEventComponent ~ removeStudent ~ this.event.studentsID", this.event.studentsID[i])
      this.event.studentsID.splice(i,1);
  }

}
