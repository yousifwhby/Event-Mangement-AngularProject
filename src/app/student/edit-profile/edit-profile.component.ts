import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_Model/student';


@Component({
  selector: 'app-edit-profile',
  templateUrl:'./edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  studentID:number=0;
  student:Student=new Student(0,"","");
  confirmPw:string="";
  errMsg:string="";
  sucMsg:string="";
  constructor(public stdSrv:StudentService, public ar:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.studentID = this.ar.snapshot.params['id'];
    this.stdSrv.getStudentByID(this.studentID).subscribe(
      (a)=>{
      console.log(a);
      this.student = a.data;
      },error=>{console.log(error)}
    );
  }

  update():void{
    if(!this.confirmPw || !this.student.password || !this.student.Email)
    {
      this.errMsg = "please fill the Form";
      setTimeout(()=>{
        this.errMsg = "";
      },4000);
    }else{
      if(this.student.password != this.confirmPw && this.confirmPw!=""){
        this.errMsg = "passwords did not match";
        setTimeout(()=>{
          this.errMsg = "";
        },4000);
      }else{
        this.stdSrv.updateSudent(this.student._id, this.student);
        this.sucMsg = "Your info updated successfully";
        setTimeout(()=>{
          this.router.navigateByUrl("/student/home/"+ this.studentID);
        },1000);
      }
    }
  }
}