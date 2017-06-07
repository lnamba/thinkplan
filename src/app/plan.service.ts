import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PlanService {

  constructor(private http: Http) { }

  getLessons() {
    return this.http.get('http://localhost:3000/lessons')
      .map(response => response.json())
  }

  getDays(){
    return this.http.get('http://localhost:3000/plan')
      .map(response => response.json())
  }

  getLessonFromDay() {
    return this.http.get('http://localhost:3000/plan/:id')
      .map(response => response.json())
  }

  

}
