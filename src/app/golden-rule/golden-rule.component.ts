import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { DataService } from '../data.service';

import { Subscription, interval, Observable} from 'rxjs';

@Component({
  selector: 'app-golden-rule',
  templateUrl: './golden-rule.component.html',
  styleUrls: ['./golden-rule.component.css']
})
export class GoldenRuleComponent implements OnInit, OnDestroy {
  
  // Parameter data
  goldenRuleNumber: number;
  lessonNumber: number;
  stepNumber: number;

  // Are the instructions typing?
  typingInstructions: boolean = false;

  // Two way binding for tabIndex of the tab
  tabIndex: number;

  // Observable subscriptions 
  private ruleSub: Subscription;
  private lessonSub: Subscription;
  private sub: Subscription;

  // Interval reference
  interval: Observable<any>;
  intervalSubscription: Subscription;

  // Data collected 
  ruleData: any;
  rulesData = [];

  // String data for instruction panel
  instructionHeading: string;
  instructionData: string;
  instructionText: string = "";
  taskText: string = "";

  // Whether the task should be shown
  showTask: boolean = false;

  // Current count and speed of text typer
  i = 0;
  speed = 50;

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    // Collect data from service
    this.rulesData = this.dataService.data;

    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.onLessonChange();
    } 
     
    });

    // Subscribe to the route parameters
    this.ruleSub = this.route.params.subscribe(params => {
      // Set variables from route data
      this.goldenRuleNumber = +params['ruleId'];
      this.ruleData = this.dataService.data[this.goldenRuleNumber - 1];
    });

    // Subscribe to the route child parameters
    this.lessonSub = this.route.firstChild.params.subscribe(params => {
      // Set variables from route data
      this.lessonNumber = params['lessonId'];
      this.stepNumber = params['stepId'];
      this.ruleData = this.dataService.data[this.goldenRuleNumber - 1];
    });

    this.sub = this.router.events.subscribe(events => {
      if(event instanceof NavigationEnd) {
        this.typingInstructions = false;
      }
    });

    // Run onLessonChange() on initialization, after parameters are defined
    this.onLessonChange();
  }

  onLessonChange() {
    // Check that the activity isn't the starting screen
    if (this.lessonNumber != 0) {
      // Set instruction panel string data
      this.instructionData = this.ruleData.lessons[this.lessonNumber - 1].steps[this.stepNumber].instructions;
      this.instructionHeading = this.ruleData.lessons[this.lessonNumber - 1].steps[this.stepNumber].title;
      this.taskText = this.ruleData.lessons[this.lessonNumber - 1].steps[this.stepNumber].nextTask;
    } else {
      this.instructionHeading = "Golden Rule #" + this.goldenRuleNumber.toString();
      this.instructionData = this.ruleData.description + "!";
      this.taskText = "Press the start button to begin."
    }
    // Reset instruction text
    this.instructionText = "";
    // Change tab
    this.tabIndex = 0;
    // Reset interval data
    this.i = 0;
    this.showTask = false;
    // Clear any intervals before, then set new interval
    this.clearInterval();
    this.interval = interval(this.speed);
    this.intervalSubscription = this.interval.subscribe(() => {
      this.typeInstructions();
    })
  }

  typeInstructions() {
    if (this.i < this.instructionData.length) {
      // Add a char from the instructionData to the shown text
      this.instructionText += this.instructionData.charAt(this.i);
      this.i++;
    } else if (!this.showTask) {
      // Show the task once typing is complete
      this.showTask = true;
    } else {
      // Clear the interval once typing is complete
      this.clearInterval();
    }
  }

  clearInterval() {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
      this.dataService.typingInstructions = true;
    }
  }

  ngOnDestroy() {
    // Unsubscribe from subscriptions
    this.ruleSub.unsubscribe();
    this.lessonSub.unsubscribe();
    this.sub.unsubscribe();
    this.clearInterval();
  }

}
