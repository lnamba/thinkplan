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

  addLesson({date, subject, content, reflections}) {
    console.log("This is getting posted", {date, subject, content, reflections})
    return this.http.post('http://localhost:3000/lessons', {date, subject, content, reflections})
      .map(response => response.json())
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
    return this.http.put(`http://localhost:3000/lessons/edit/${lesson.id}`, lesson)
      .map(response => {
      console.log("This is puts response ", response)
      response.json()})
  }

  deleteDailyLesson(lesson) {
    return this.http.delete(`http://localhost:3000/lessons/${lesson.id}`)
      .map(res => res.json())
  }

}
