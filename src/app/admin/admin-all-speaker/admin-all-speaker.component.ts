import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpeakerService } from 'src/app/speaker.service';
import { Speaker } from 'src/app/_Model/speaker';

@Component({
  selector: 'app-admin-all-speaker',
  templateUrl: './admin-all-speaker.component.html',
  styleUrls: ['./admin-all-speaker.component.css']
})
export class AdminAllSpeakerComponent implements OnInit {

  speakers:Speaker[]=[];
  searchTxt:string = "";
  constructor(public speakerSrv:SpeakerService, public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.speakerSrv.getAllSpeaker().subscribe(
      data=>{
        
        this.speakers = data.data;
      },
      error=>{
        alert(error.error.message);
      }
    );
  }

  deletSpeaker(speaker:Speaker){
    if(confirm(`Delete Speaker: ${speaker.username}?`)){
      this.speakerSrv.deleteSpeaker(speaker._id).subscribe(
        data=>{
          if(data.message.includes("delete")){
            alert("Speaker Got Deleted!");
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
