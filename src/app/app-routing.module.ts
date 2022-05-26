import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddEventComponent } from './admin/admin-add-event/admin-add-event.component';
import { AdminAllEventComponent } from './admin/admin-all-event/admin-all-event.component';
import { AdminAllSpeakerComponent } from './admin/admin-all-speaker/admin-all-speaker.component';
import { AdminAllStudentComponent } from './admin/admin-all-student/admin-all-student.component';
import { AdminEditEventComponent } from './admin/admin-edit-event/admin-edit-event.component';
import { AdminEditSpeakerComponent } from './admin/admin-edit-speaker/admin-edit-speaker.component';
import { LoginComponent } from './core/login/login.component';
import { LogoutComponent } from './core/logout/logout.component';
import { PageNotAuthorizedComponent } from './core/page-not-authorized/page-not-authorized.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { RegistrationComponent } from './core/registration/registration.component';
import { MyloginGuard } from './mylogin.guard';
import { RoleGaurdGuard } from './role-gaurd.guard';
import { SpeakerEditProfileComponent } from './speaker/edit-profile/edit-profile.component';
import { SpeakerEventDetailsComponent } from './speaker/event-details/event-details.component';
import { SpeakerMainComponent } from './speaker/speaker-main/speaker-main.component';
import { AllstudetComponent } from './student/allstudet/allstudet.component';
import { EditProfileComponent } from './student/edit-profile/edit-profile.component';
import { EventDetailsComponent } from './student/event-details/event-details.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
  {path: "logout", component:LogoutComponent,canActivate: [MyloginGuard]},
  
  {path: "student/home/:id", component:AllstudetComponent,canActivate: [MyloginGuard, RoleGaurdGuard], data:{role: "student"}},
  {path: "student/details/:id", component:EventDetailsComponent,canActivate: [MyloginGuard, RoleGaurdGuard], data:{role: "student"}},
  {path: "student/editProfile/:id", component:EditProfileComponent,canActivate: [MyloginGuard, RoleGaurdGuard], data:{role: "student"}},

  {path: "speaker/home/:id", component:SpeakerMainComponent,canActivate: [MyloginGuard, RoleGaurdGuard], data:{role: "speaker"}},
  {path: "speaker/details/:id", component:SpeakerEventDetailsComponent,canActivate: [MyloginGuard, RoleGaurdGuard], data:{role: "speaker"}},
  {path: "speaker/editProfile/:id", component:SpeakerEditProfileComponent,canActivate: [MyloginGuard, RoleGaurdGuard], data:{role: "speaker"}},

  {path: "admin/events", component:AdminAllEventComponent,canActivate: [MyloginGuard, RoleGaurdGuard], data:{role: "admin"}},
  {path: "admin/events/edit/:id", component:AdminEditEventComponent,canActivate: [MyloginGuard, RoleGaurdGuard], data:{role: "admin"}},
  {path: "admin/events/add", component:AdminAddEventComponent,canActivate: [MyloginGuard, RoleGaurdGuard], data:{role: "admin"}},
  {path: "admin/speakers", component:AdminAllSpeakerComponent,canActivate: [MyloginGuard, RoleGaurdGuard], data:{role: "admin"}},
  {path: "admin/students", component:AdminAllStudentComponent,canActivate: [MyloginGuard, RoleGaurdGuard], data:{role: "admin"}},
  {path: "admin/speakers/edit/:id", component:AdminEditSpeakerComponent,canActivate: [MyloginGuard, RoleGaurdGuard], data:{role: "admin"}},
  {path:"",redirectTo:"login",pathMatch:"prefix"},//redirect emty string url

  {path:"NotAuthorized",component:PageNotAuthorizedComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
