import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { PlanService } from '../plan.service';

@Component({
  selector: 'week-plan',
  templateUrl: './week-plan.component.html',
  styleUrls: ['./week-plan.component.css']
})
export class WeekPlanComponent implements OnInit {
  lessons: any[];
  days: any[];
  showDatePicker: false;
  lessonsFromDay: any[];

  constructor(private planService: PlanService) { }

  ngOnInit() {

    this.getDays()

  }

  showDate(event) {
    this.showDatePicker ? !this.showDatePicker : this.showDatePicker;
  }

  getLessons() {
    this.planService.getLessons().subscribe(res => this.lessons = res);
  }

  getLessonFromDay() {
    this.planService.getLessonFromDay().subscribe(res => this.lessonsFromDay = res);
  }

  getDays() {
    this.planService.getDays().subscribe(res => this.days = res)
  }

  // getSubjects() {
  //   this.planService.get
  // }



}
