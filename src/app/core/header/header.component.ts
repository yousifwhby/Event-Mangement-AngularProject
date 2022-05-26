import { Component, OnInit } from '@angular/core';
import { ProdcastService } from 'src/app/prodcast.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  studentID:number=0;
  speakerID:string=""; 
  role:string="none";
  home:string="none";
 

  logged:boolean=true;
  
  roleSubscription: Subscription;
  studentIDSubscription: Subscription;
  speakerIDSubscription: Subscription;

 
  

  

  constructor(private podcasted: ProdcastService) { 
    this.roleSubscription = this.podcasted.role.subscribe(role => this.role = role);
    this.studentIDSubscription = this.podcasted.studentID.subscribe(id => this.studentID = id);
    this.speakerIDSubscription = this.podcasted.speakerID.subscribe(id => this.speakerID = id);
    
  }

  ngOnDestroy() {
    this.roleSubscription.unsubscribe();
    this.studentIDSubscription.unsubscribe();
    this.speakerIDSubscription.unsubscribe();
  }  

  
  ngOnInit(): void {
    if (this.role=='admin') {
      this.home="/admin/events"
    } 
   else if (this.role=='speaker')
   {
    this.home=`/speaker/home/${this.speakerID}`

   }
    else {
      this.home=`/student/home/${this.studentID}`
      
    }
  }
  

}
