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

  constructor(private lessonService: LessonService) { }
  
  ngOnInit() {
    this.getLessons()
  }

  getLessons() {
    this.lessonService.getLessons().subscribe(res => this.lessons = res);
  }

  getSingleLesson() {
    this.lessonService.getLessons().subscribe(res => this.lesson = res);
  }

}
