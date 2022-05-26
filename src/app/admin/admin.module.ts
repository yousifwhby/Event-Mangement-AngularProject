import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAllStudentComponent } from './admin-all-student/admin-all-student.component';
import { AdminAllSpeakerComponent } from './admin-all-speaker/admin-all-speaker.component';
import { AdminAllEventComponent } from './admin-all-event/admin-all-event.component';
import { AdminEditEventComponent } from './admin-edit-event/admin-edit-event.component';
import { AdminAddEventComponent } from './admin-add-event/admin-add-event.component';
import { AdminEditSpeakerComponent } from './admin-edit-speaker/admin-edit-speaker.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminAllStudentComponent,
    AdminAllSpeakerComponent,
    AdminAllEventComponent,
    AdminEditEventComponent,
    AdminAddEventComponent,
    AdminEditSpeakerComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    RouterModule,
    
    
  ]
})
export class AdminModule { }
