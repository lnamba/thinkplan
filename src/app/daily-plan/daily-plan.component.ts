import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { LessonService } from '../lesson.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Routes, Router }  from '@angular/router';

@Component({
  selector: 'daily-plan',
  templateUrl: './daily-plan.component.html',
  styleUrls: ['./daily-plan.component.css']
})
export class DailyPlanComponent implements OnInit {
  lessons: any[];
  lesson: any[];
  selected_day: any[];
  today = {};
  // showPlanForm = true;
  selected_lesson = {};
  // addForm: FormGroup;
  // date = '';
  // subject = '';
  // content = '';
  // reflections = '';

  constructor(private lessonService: LessonService, private router: Router) {
    // this.createForm()
  }
  
  ngOnInit() {
    this.getLessons();
    this.collectSelectedDay()
    this.todaysDate();
    console.log(this.selected_day)
  }

  getLessons() {
    this.lessonService.getLessons().subscribe(res => this.lessons = res);
  }

  // getSingleLesson() {
  //   this.lessonService.getLessons().subscribe(res => {
  //     console.log(res)
  //     this.lesson = res});
  // }

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
    this.lessonService.deleteDailyLesson(lesson).subscribe(res => {
      console.log("Here is the res", res)
      this.lessons = res});
      this.router.navigate(['/plan'])
  }

}
