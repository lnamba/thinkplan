import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { PlanService } from '../plan.service';
import { LessonService } from '../lesson.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'week-plan',
  templateUrl: './week-plan.component.html',
  styleUrls: ['./week-plan.component.css']
})
export class WeekPlanComponent implements OnInit {
  lessons: any[];
  getDateToday = new Date();
  weekdays: any[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  daysBetween: any[]
  dateFormat: any[]
  someDays: any[];
  selected_day: any[]; 
  showPlanForm = true;
  addForm: FormGroup;
  addDayForm: FormGroup;
  date = '';
  subject = '';
  content = '';
  reflections = '';
  ifLesson = true;
  

  constructor(private lessonService: LessonService, private fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit() {

    this.getLessons()
    this.getMonday()
    this.getFriday();
    
  }

  colors = ['success', 'danger', 'info', 'warning', 'purple']

  createForm() {
    this.addForm = this.fb.group({
      date: ['', Validators.required ],
      subject: ['', Validators.required ],
      content: ['', Validators.required ],
      reflections: '',
    })
  }

  trackBy(index, day) {
    return day.id
  }

  addLesson(lesson) {
    this.date = lesson.date;
    this.subject = lesson.subject;
    this.content = lesson.content;
    this.reflections = lesson.reflections;

    this.lessonService.addLesson({date: this.date, subject: this.subject, content: this.content, reflections:this.reflections}).subscribe(res => {
      this.getLessons();
    })

    this.addForm.reset()
    lesson.date = ''
    lesson.subject = '';
    lesson.content = '';
    lesson.reflections = '';
    // this.showPlanForm = !this.showPlanForm;
  }

  showIt(){
    this.showPlanForm = !this.showPlanForm;
  }

  getLessons() {
    this.lessonService.getLessons().subscribe(res => {
      this.lessons = res;
      const start = this.getMonday();
      const end = this.getFriday();
      const curr = new Date(start)
      const daysBetween = [];
      const dateFormat = []
      let monday = [];
      let tuesday = [];
      let wednesday = [];
      let thursday = [];
      let friday = [];
      
  
      while(curr <= end) {
        daysBetween.push(new Date(curr))
        curr.setDate(curr.getDate() + 1);
      } 
      this.daysBetween = daysBetween;
      console.log(this.daysBetween)
      
      function isoStringToDate(s) {
        var b = s.split(/\D/);
        return new Date(Date.UTC(b[0], --b[1], b[2], b[3]||0, b[4]||0, b[5]||0, b[6]||0));
      }

      this.lessons.map(function(i) {
        i.date_taught = isoStringToDate(i.date_taught)
        dateFormat.push(i)
      })
      
      this.dateFormat = dateFormat
      console.log(this.dateFormat)
      for (var i = 0; i < this.dateFormat.length; i++) {
        for (var j = 0; j < this.daysBetween.length; j++) {
          if (this.dateFormat[i].date_taught.toDateString() === this.daysBetween[j].toDateString()) { //this.daysBetween.indexOf(dateFormat[i].date_taught) > -1
            if (this.dateFormat[i].date_taught.getDay() === 1)  {
              monday.push(this.dateFormat[i])
            } else if (this.dateFormat[i].date_taught.getDay() === 2) {
              tuesday.push(this.dateFormat[i])
            } else if (this.dateFormat[i].date_taught.getDay() === 3) {
              wednesday.push(this.dateFormat[i])
            } else if (this.dateFormat[i].date_taught.getDay() === 4) {
              thursday.push(this.dateFormat[i])
            } else {
              friday.push(this.dateFormat[i])
            }
          }
        }
      }
      this.someDays = [monday, tuesday, wednesday, thursday, friday]

    })
  }

  viewIndividual(day){
    this.lessonService.setSelectedDay(day);
    this.selected_day =  this.lessonService.getSelectedDay(); 
    console.log("we would now go go another page that would pull this data : ",this.selected_day )
  
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

}
