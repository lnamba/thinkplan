import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PlanService {

  constructor(private http: Http) { }

  getPlans(){
    return this.http.get('http://localhost:3000/plan')
      .map(response => response.json())
  }

}
