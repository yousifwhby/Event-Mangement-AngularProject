import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerMainComponent } from './speaker-main/speaker-main.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SpeakerEventDetailsComponent } from './event-details/event-details.component';
import { SpeakerEditProfileComponent } from './edit-profile/edit-profile.component';



@NgModule({
  declarations: [
    SpeakerMainComponent,
    SpeakerEventDetailsComponent,
    SpeakerEditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SpeakerModule { }
