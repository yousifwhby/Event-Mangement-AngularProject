import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/login.service';
import { ProdcastService } from 'src/app/prodcast.service';
import { LoginCred } from 'src/app/_Model/login-cred';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  sub:Subscription|null=null;
  cred:LoginCred=new LoginCred("","");
  password="";//admin123
  email="";//admin@gmail.com
  errMsg:string="";
  role:string="";
  token:string="";
  constructor(public logServ:LoginService,public router:Router,public prodcasted:ProdcastService) { }

  ngOnInit(): void {
  }
  login()
  {
    
    console.log("🚀 ~ file: login.component.ts ~ line 30 ~ LoginComponent ~ this.email,this.password", this.email,this.password,"hello",this.cred.email,this.cred.password);
    this.sub = this.logServ.loging(this.email,this.password).subscribe(
      data=>{
        this.token = data.token;
        
        if(data.message.includes("admin")){
          this.role = "admin";
          this.router.navigateByUrl("/admin/events");
        }
        if(data.message.includes("student")){
          this.role = "student";
          let id = JSON.parse(atob(this.token.split('.')[1])).id;
          this.prodcasted.assignStudentID(id);
          this.router.navigateByUrl("/student/home/"+ id);
        }
        if(data.message.includes("speaker")){
          this.role = "speaker";
          let id = JSON.parse(atob(this.token.split('.')[1])).id;
          this.prodcasted.assignSpeakerID(id);
          this.router.navigateByUrl("/speaker/home/"+ id);
        }
       
        if(this.role){
          sessionStorage.setItem("role",this.role);
          sessionStorage.setItem("token",this.token);
          this.prodcasted.atLogin(true,this.role);
        }
      },
      error => {
        console.log(error)
          this.errMsg = error.error.message;
        setTimeout(()=>this.errMsg = "",3000);
      }
    );
  }

  
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    
  }

}
