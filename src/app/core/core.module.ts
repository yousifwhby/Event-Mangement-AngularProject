import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotAuthorizedComponent } from './page-not-authorized/page-not-authorized.component';
import { FilterSpeakerUsernamePipe } from './pipe/filter-speaker-username.pipe';
import { FilterStudentEmailPipe } from './pipe/filter-student-email.pipe';
import { FilterEventTitlePipe } from './pipe/filter-event-title.pipe';
import { FilterMainspeakerPipe } from './pipe/filter-mainspeaker.pipe';
import { FilterOtherspeakerPipe } from './pipe/filter-otherspeaker.pipe';
import { FilterStudentsPipe } from './pipe/filter-students.pipe';
import { LogoutComponent } from './logout/logout.component';





@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MainbodyComponent,
   
    FooterComponent,
        LoginComponent,
        RegistrationComponent,
        PageNotFoundComponent,
        PageNotAuthorizedComponent,
        FilterSpeakerUsernamePipe,
        FilterStudentEmailPipe,
        FilterEventTitlePipe,
        FilterMainspeakerPipe,
        FilterOtherspeakerPipe,
        FilterStudentsPipe,
        LogoutComponent,
        ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    
    

  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    MainbodyComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    PageNotAuthorizedComponent,
    FilterSpeakerUsernamePipe,
    FilterStudentEmailPipe,
    FilterEventTitlePipe,
    FilterMainspeakerPipe,
    FilterOtherspeakerPipe,
    FilterStudentsPipe
  ]
})
export class CoreModule { }
