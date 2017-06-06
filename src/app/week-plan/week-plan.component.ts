import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { PlanService } from '../plan.service';
import { LessonService } from '../lesson.service';

@Component({
  selector: 'week-plan',
  templateUrl: './week-plan.component.html',
  styleUrls: ['./week-plan.component.css']
})
export class WeekPlanComponent implements OnInit {
  lessons: any[];
  getDateToday = new Date();
  constructor(private planService: PlanService, private lessonService: LessonService) { }

  ngOnInit() {

    this.getLessons()
    this.getMonday()
    this.getFriday();

  }

  getMonday() {
    const dateToday = new Date();
    const getDateToday = dateToday.getDay();
    const diff = dateToday.getDate() - getDateToday + (getDateToday === 0 ? -6 : 1);
    return new Date(dateToday.setDate(diff));
  }

  getFriday() {
    const mon = this.getMonday();
    return new Date(mon.setDate(mon.getDate() + 4));
  }

  getLessons() {
    this.lessonService.getLessons().subscribe(res => this.lessons = res)
  }


  // getLessons() {
  //   this.planService.getLessons().subscribe(res => this.lessons = res);
  // }

  // getLessonFromDay() {
  //   this.planService.getLessonFromDay().subscribe(res => this.lessonsFromDay = res);
  // }



}
