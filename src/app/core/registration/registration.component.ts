import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { SpeakerService } from 'src/app/speaker.service';
import { StudentService } from 'src/app/student.service';
import { Speaker } from 'src/app/_Model/speaker';
import { Student } from 'src/app/_Model/student';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
checkstd=true;
checkspe=false;
clas='show';
clas2='d-none';
student:Student= new Student(0,"","");
  speaker:Speaker= new Speaker("0","","","",{city:"",street:"",building:""});

  confirmPw:string = "";

  studentRegister:boolean = true;
  speakerRegister:boolean = false;
  
  errMsg="";
  sucMsg="";
  constructor(public LoginServ:LoginService,public router:Router, public stdServ:StudentService, public speServ:SpeakerService) { }

  ngOnInit(): void {
  }
toggle()
{
  this.checkstd= this.checkstd?false:true;
  this.checkspe= this.checkspe?false:true;
  
}

register(){
  alert(`${this.confirmPw}+${this.student.Email}`)
  if(this.studentRegister){
    if(this.student.Email && this.student.password && this.confirmPw){
      if(this.student.password == this.confirmPw){
        this.stdServ.addStudent(this.student).subscribe(
          data=>{
            if(data.message.includes("added")){
              this.sucMsg = "registered successfully";
              setTimeout(()=>{
                this.sucMsg = "";
                this.router.navigateByUrl("/login");
              },2000);
            }
          },
          error=>{
            this.errMsg = error.error.message;
            setTimeout(()=>{
              this.errMsg = "";
            },3000);
          }
        )
      }else{
        this.errMsg = "passwords dose not match";
        setTimeout(()=>{
          this.errMsg = "";
        },3000);
      }
    }else{
      this.errMsg = "please fill the form";
        setTimeout(()=>{
          this.errMsg = "";
        },3000);
    }
  }
  else{
    if(this.speaker.Email && this.speaker.password && this.confirmPw && this.speaker.username){
      if(this.speaker.password == this.confirmPw){
        this.speServ.addSpeaker(this.speaker).subscribe(
          data=>{
            console.log(data);
            if(data.message.includes("added")){
              this.sucMsg = "registered successfully";
              setTimeout(()=>{
                this.sucMsg = "";
                this.router.navigateByUrl("/login");
              },2000);
            }
          },
          error=>{
            this.errMsg = error.error.message;
            setTimeout(()=>{
              this.errMsg = "";
            },3000);
          }
        );
      }else{
        this.errMsg = "passwords dont match";
        setTimeout(()=>{
          this.errMsg = "";
        },3000);
      }
    }else{
      this.errMsg = "please fill the form";
        setTimeout(()=>{
          this.errMsg = "";
        },3000);
    }
  }
}


}
