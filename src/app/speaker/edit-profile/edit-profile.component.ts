import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_Model/speaker';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class SpeakerEditProfileComponent implements OnInit {

  speakerID:string="0";
  speaker:Speaker = new Speaker("","","","",{city:"",street:"",building:""});
  confirmPw:string="";
  errMsg:string="";
  succMsg:string="";

  constructor(public speakerSrv:SpeakerService, public ar:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.speakerID = this.ar.snapshot.params['id'];
    this.speakerSrv.getSpeakerByID(this.speakerID).subscribe(a=> this.speaker =a.data);
  }

  update(){
    if(!this.confirmPw || !this.speaker.password || !this.speaker.Email || !this.speaker.username || !this.speaker.Email)
    {
      this.errMsg = "please fill the Form";
      setTimeout(()=>{
        this.errMsg = "";
      },4000);
    }else{
      if(this.speaker.password != this.confirmPw && this.confirmPw!=""){
        this.errMsg = "passwords did not match";
        setTimeout(()=>{
          this.errMsg = "";
        },4000);
      }else{
        this.speakerSrv.updateSpeaker(this.speaker._id,this.speaker).subscribe(a=> {this.succMsg = ` Your info updated successfully${a.message}`;
        
         setTimeout(()=>{
           this.router.navigateByUrl("/speaker/home/"+ this.speakerID);
         },1000)
        }
        );
      }
    }
  }
}
