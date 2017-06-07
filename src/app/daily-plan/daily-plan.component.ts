import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { LessonService } from '../lesson.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ngbDatepicker } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private lessonService: LessonService) {
    // this.createForm()
  }
  
  ngOnInit() {
    this.getLessons();
    this.collectSelectedDay()
    this.todaysDate();
    // this.showStuff()
  }

  // showStuff() {
  //   console.log(this.addForm.value)
  // }

  // createForm() {
  //   this.addForm = this.fb.group({
  //     date: ['', Validators.required ],
  //     subject: ['', Validators.required ],
  //     content: ['', Validators.required ],
  //     reflections: '',
  //   })
  // }

  // addLesson(lesson) {
  //   this.date = lesson.date;
  //   this.subject = lesson.subject;
  //   this.content = lesson.content;
  //   this.reflections = lesson.reflections
  // }

  // showIt(){
  //   this.showPlanForm = !this.showPlanForm;
  // }

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
