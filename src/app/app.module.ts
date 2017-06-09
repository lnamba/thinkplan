import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import 'hammerjs';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WeekPlanComponent } from './week-plan/week-plan.component';
import { DailyPlanComponent } from './daily-plan/daily-plan.component';
import { LessonService } from './lesson.service';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WeekPlanComponent,
    DailyPlanComponent,
    EditFormComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    Ng2PageScrollModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'plan',
        component: WeekPlanComponent
      },
      {
        path: 'day',
        component: DailyPlanComponent
      },
      {
        path: 'edit',
        component: EditFormComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
    ]),
  ],
  providers: [LessonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
