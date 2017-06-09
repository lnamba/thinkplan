import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations'
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  constructor() {
    PageScrollConfig.defaultDuration = 500;
  }

  ngOnInit() {
    
  }
  
//  scrollDown(location: string): void {
//    console.log(location)
//     window.location.hash = location
//  }


}
