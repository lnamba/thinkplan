import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { PlanService } from '../plan.service';
import { LessonService } from '../lesson.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Routes, Router }  from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name = '';
  email = '';
  password = '';  
  signupForm: FormGroup;
  
  constructor(private lessonService: LessonService, private fb: FormBuilder, private router: Router) { 
    this.createForm()
  }
    
  ngOnInit() {
  }

  createForm() {
    this.signupForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      password: ['', Validators.required ],
    })
  }

  signupUser(user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;

    this.lessonService.addUser({name: this.name, email: this.email, password: this.password}).subscribe(res => {
      console.log(res)
       this.router.navigate(['/plan'])
    })
  }

}
