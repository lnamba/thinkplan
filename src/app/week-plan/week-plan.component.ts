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
  date = '';
  subject = '';
  content = '';
  reflections = '';
  // addedLesson: any[];

  constructor(private planService: PlanService, private lessonService: LessonService, private fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit() {

    this.getLessons()
    this.getMonday()
    this.getFriday();
    this.showStuff()

  }

  showStuff() {
    console.log(this.addForm.value)
  }

  createForm() {
    this.addForm = this.fb.group({
      date: ['', Validators.required ],
      subject: ['', Validators.required ],
      content: ['', Validators.required ],
      reflections: '',
    })
  }

  addLesson(lesson) {
    this.date = lesson.date;
    this.subject = lesson.subject;
    this.content = lesson.content;
    this.reflections = lesson.reflections;

    this.lessonService.addLesson({date: this.date, subject: this.subject, content: this.content, reflections:this.reflections}).subscribe(res => {
      
      // this.addedLesson = res;
      // this.lessons.push(this.addedLesson)
      this.lessons = res
      console.log(res)
      console.log("Now heres the new array", this.lessons)
    })
    this.showPlanForm = !this.showPlanForm;
  }

  showIt(){
    this.showPlanForm = !this.showPlanForm;
  }

  getLessons() {
    // this.lessonService.getLessons().subscribe(res => this.lessons = res)
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
      
      function isoStringToDate(s) {
        var b = s.split(/\D/);
        return new Date(Date.UTC(b[0], --b[1], b[2], b[3]||0, b[4]||0, b[5]||0, b[6]||0));
      }

      this.lessons.map(function(i) {
        i.date_taught = isoStringToDate(i.date_taught)
        dateFormat.push(i)
      })
      this.dateFormat = dateFormat
      for (var i = 0; i < this.dateFormat.length; i++) {
        for (var j = 0; j < this.daysBetween.length; j++) {
          if (this.dateFormat[i].date_taught.getDay() === this.daysBetween[j].getDay()) {
            if (this.dateFormat[i].date_taught.getDay() === 1) {
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

  allLessons() {

  }


  viewIndividual(day){
    this.lessonService.setSelectedDay(day);

    /// $state.go("/individual_page"); 

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
  
  // weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  


  // getLessons() {
  //   this.planService.getLessons().subscribe(res => this.lessons = res);
  // }

  // getLessonFromDay() {
  //   this.planService.getLessonFromDay().subscribe(res => this.lessonsFromDay = res);
  // }



}
