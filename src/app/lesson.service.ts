import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class LessonService {

  constructor(private http: Http) { }

  getLessons() {
    return this.http.get('http://localhost:3000/lessons')
      .map(response => response.json())
  }

  getSingleLesson() {
    return this.http.get('http://localhost:3000/lessons/:id')
      .map(response => response.json())
  }

}
