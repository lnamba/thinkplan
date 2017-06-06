import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import 'hammerjs';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WeekPlanComponent } from './week-plan/week-plan.component';
import { PlanService } from './plan.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WeekPlanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule, 
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'plan',
        component: WeekPlanComponent
      },
    ]),
  ],
  providers: [PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
