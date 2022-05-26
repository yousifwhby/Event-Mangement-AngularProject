import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllstudetComponent } from './allstudet/allstudet.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormsModule } from '@angular/forms';
import { EventDetailsComponent } from './event-details/event-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllstudetComponent,
    EditProfileComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class StudentModule { }
