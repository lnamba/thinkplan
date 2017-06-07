import { Component, OnInit } from '@angular/core';
import { LessonService } from '../lesson.service';
import { RouterModule, Routes, Router }  from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  currentLesson = {};
  lesson = {}

  constructor(private lessonService: LessonService, private router: Router) { }
  
  ngOnInit() {
    this.getEditableLesson()
  }

  getEditableLesson() {
    this.currentLesson = this.lessonService.getLessonToEdit()
  }

  editLesson(lesson){
    this.lessonService.editDailyLesson(lesson).subscribe(res => {
      console.log(res)
    })
    this.router.navigate(['/day'])
  }

  goBack() {
    this.router.navigate(['/day'])
  }

}
