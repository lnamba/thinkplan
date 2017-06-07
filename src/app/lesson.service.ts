import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class LessonService {

  constructor(private http: Http) { }

  selected_day: any[]; 
  selected_lesson: {};

  getSelectedDay(){
    return this.selected_day;
  }

  setSelectedDay(day){
    this.selected_day = day; 
  }

  getLessonToEdit() {
    return this.selected_lesson
  }

  setLessonToEdit(lesson) {
    this.selected_lesson = lesson
  }

  getLessons() {
    return this.http.get('http://localhost:3000/lessons')
      .map(response => response.json())
  }

  getSingleLesson() {
    return this.http.get('http://localhost:3000/lessons/:id')
      .map(response => response.json())
  }

  editDailyLesson(lesson) {
    return this.http.put(`/edit/${lesson.id}`, lesson)
      .map(response => {
      console.log("This is puts response ", response)
      response.json()})
      
  }

}
