import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { PlanService } from '../plan.service';

@Component({
  selector: 'week-plan',
  templateUrl: './week-plan.component.html',
  styleUrls: ['./week-plan.component.css']
})
export class WeekPlanComponent implements OnInit {
  plans: any[];

  constructor(private planService: PlanService) { }

  ngOnInit() {

    this.getPlans()

    // this.plans = this.planService.getPlans()
    //   .catch(err => {
    //     console.log(err)
    //   })

  }
  getPlans() {
    this.planService.getPlans().subscribe(res => this.plans = res)
  }

}
