import { Component, OnInit } from '@angular/core';
import { LessonService } from '../lesson.service';
import 'rxjs/Rx';

@Component({
  selector: 'edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  currentLesson = {};

  constructor(private lessonService: LessonService) { }
  
  ngOnInit() {
    this.getEditableLesson()
  }

  getEditableLesson() {
    this.currentLesson = this.lessonService.getLessonToEdit()
  }

  editLesson(){
    console.log('the current lesson is' , this.currentLesson)
    this.lessonService.editDailyLesson(this.currentLesson)
  }

  

}
