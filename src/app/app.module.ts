import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { StudentModule } from './student/student.module';
import { SpeakerModule } from './speaker/speaker.module';
import { AdminModule } from './admin/admin.module';
import {  HTTP_INTERCEPTORS } from '@angular/common/http';
import { InerceptorInterceptor } from './core/inerceptor.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    StudentModule,
    SpeakerModule,
    AdminModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InerceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
