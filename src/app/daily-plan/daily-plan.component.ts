import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { LessonService } from '../lesson.service';
// import { ngbDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-daily-plan',
  templateUrl: './daily-plan.component.html',
  styleUrls: ['./daily-plan.component.css']
})
export class DailyPlanComponent implements OnInit {
  lessons: any[];
  lesson: any[];
  selected_day: any[];
  today = {};
  showPlanForm = true;
  selected_lesson = {};

  constructor(private lessonService: LessonService) { }
  
  ngOnInit() {
    this.getLessons();
    this.collectSelectedDay()
    this.todaysDate();
  }

  showIt(){
    this.showPlanForm = !this.showPlanForm;
  }

  getLessons() {
    this.lessonService.getLessons().subscribe(res => this.lessons = res);
  }

  getSingleLesson() {
    this.lessonService.getLessons().subscribe(res => this.lesson = res);
  }

  collectSelectedDay() {
    console.log('Collecting data from ', this.lessonService.getSelectedDay())
    this.selected_day = this.lessonService.getSelectedDay()
  }

  todaysDate() {
    this.today = this.lessonService.getSelectedDay()[0].date_taught
  }

  goToEdit(lesson){
    this.lessonService.setLessonToEdit(lesson);
    this.selected_lesson = this.lessonService.getLessonToEdit()

    // console.log("This lesson is your lesson", this.selected_lesson)
  }

  deleteLesson(lesson){

  }

}
