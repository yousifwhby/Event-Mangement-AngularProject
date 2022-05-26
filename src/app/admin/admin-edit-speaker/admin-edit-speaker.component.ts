import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_Model/speaker';


@Component({
  selector: 'app-admin-edit-speaker',
  templateUrl: './admin-edit-speaker.component.html',
  styleUrls: ['./admin-edit-speaker.component.css']
})
export class AdminEditSpeakerComponent implements OnInit {

  speakerID:string="0";
  speaker:Speaker = new Speaker("","","","",{city:"",street:"",building:""});
  errMsg:string="";
  sucMsg:string="";

  constructor(public speakerSrv:SpeakerService, public ar:ActivatedRoute, public router:Router) { }

  ngOnInit(): void {
    this.speakerID = this.ar.snapshot.params['id'];
    this.speakerSrv.getSpeakerByID(this.speakerID).subscribe(
      data=>{
        this.speaker = data.data;
      },
      error=>{alert(error.error.message);
        this.errMsg = error.error.message;
        setTimeout(()=>{
          this.errMsg = "";
        },3000);}
    );
  }

  update(){
    if(!this.speaker.Email)
    {
      this.errMsg = "please fill the Form";
      setTimeout(()=>{
        this.errMsg = "";
      },3000);
    }else{
        this.speakerSrv.updateSpeaker(this.speaker._id,this.speaker).subscribe(
          data=>{
            if(data.message.includes("updated")){
              this.sucMsg = "info updated successfully";
              setTimeout(()=>{
                this.router.navigateByUrl("/admin/speakers");
              },1000);
            }
          },
          error=>{
            this.errMsg = error.error.message;
            setTimeout(()=>{
              this.errMsg = "";
            },3000);
          }
        );
        
    }
  }
}

  

