import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProdcastService } from './prodcast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectAngular';
  logged:boolean = false;
  message:string="";
  logInSubscription: Subscription;

  constructor(private podcasted: ProdcastService) { 
    this.logInSubscription = this.podcasted.flag.subscribe(flag => this.logged = flag)
  }

  ngOnDestroy() {
    this.logInSubscription.unsubscribe();
  }


}
