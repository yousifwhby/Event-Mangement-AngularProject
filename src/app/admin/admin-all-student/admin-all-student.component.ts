import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Student } from 'src/app/_Model/student';

@Component({
  selector: 'app-admin-all-student',
  templateUrl: './admin-all-student.component.html',
  styleUrls: ['./admin-all-student.component.css']
})
export class AdminAllStudentComponent implements OnInit {

  students:Student[]=[];
  searchTxt:string = "";
  constructor(public stdSrv:StudentService, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.stdSrv.getAllStudent().subscribe(
      data=>{
       
        this.students = data.data;
      },
      error=>{
        alert(error.error.message);
      }
    );
  }

  deletStudent(student:Student){
    if(confirm(`Delete Student: ${student.Email}?`)){
      this.stdSrv.deleteSudent(student._id).subscribe(
        data=>{
          
          if(data.message.includes("delete")){
            alert("Student Got Deleted!");
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
