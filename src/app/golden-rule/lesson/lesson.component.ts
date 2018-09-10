import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit, OnDestroy {
  // Route paramters
  goldenRuleNumber: number = 0;
  lessonNumber: number = 0;
  stepNumber: number = 0;

  // Data Variables
  stepData: any;
  lessonData: any;
  ruleData: any;

  // Items to Display
  itemDisplay: any;

  // Unread List
  unreadList: any = [];

  // Text to display in input
  inputText: string = "";
  inputTextData: string;


  // Current count and speed of text typer
  i = 0;
  speed = 150;

  // Interval reference
  interval: any;

  // Email Data
  emailSelected: number = 0;
  showEmailPane: boolean = false;

  // Router parameter subscriptions
  private sub: any;
  private ruleSub: any;
  private lessonSub: any;

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    // Subscribe to route to collect the ruleId parameter
    this.ruleSub = this.route.parent.params.subscribe(params => {
      this.goldenRuleNumber = +params['ruleId'];
      this.ruleData = this.dataService.data[this.goldenRuleNumber - 1];
    })

    // Subscribe to route to collect the lessonId and stepId parameters
    this.lessonSub = this.route.params.subscribe(params => {
      this.lessonNumber = +params['lessonId'];
      this.stepNumber = +params['stepId'];
      if (this.lessonNumber > 0) {
        this.lessonData = this.dataService.data[this.goldenRuleNumber - 1].lessons[this.lessonNumber - 1];
        if (this.lessonData.hasOwnProperty('steps')) {
          this.stepData = this.lessonData.steps[this.stepNumber];
        }
      }
    })
    // Subscribe to router events
    this.sub = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        clearInterval(this.interval);
      }
      if (event instanceof NavigationEnd) {
        if (this.lessonNumber > 0) {
          this.lessonData = this.dataService.data[this.goldenRuleNumber - 1].lessons[this.lessonNumber - 1];
          if (this.lessonData.hasOwnProperty('steps')) {
            this.stepData = this.lessonData.steps[this.stepNumber];
          }
          this.unreadList = [];
          this.createItemDisplay();
        }
      }
    })
    if (this.lessonNumber > 0) {
      this.createItemDisplay();
    }
  }

  createItemDisplay() {
    this.itemDisplay = [];
    this.inputText = "";
    // Check if the lesson is direct message or email
    if (this.lessonData.type == 'Direct Message' || this.lessonData.type == 'Email') {
      // Set the inputText
      this.inputTextData = this.stepData.inputText;
      // Iterate through each item
      this.stepData.messages.forEach(element => {
        if (this.lessonData.type == 'Email') {
          // Check if the element has the delay property
          if (element.hasOwnProperty('delay')) {
            // Wait the specified time until adding the element
            setTimeout(() => {
              this.itemDisplay.unshift(element);
              this.unreadList.unshift(element.unread);
              this.emailSelected++;
            }, element.delay);
          } else {
            // Else just add it
            this.itemDisplay.push(element);
            this.unreadList.push(element.unread);
          }
        } else {
          // Check if the element has the delay property
          if (element.hasOwnProperty('delay')) {
            // Wait the specified time until adding the element
            setTimeout(() => {
              this.itemDisplay.push(element);
            }, element.delay);
          } else {
            // Else just add it
            this.itemDisplay.push(element);
          }
        }
      });

      if (this.lessonData.type == 'Direct Message') {
        // Start the input typing after 500ms
        setTimeout(() => {
          // Reset interval data
          this.i = 0;
          // Clear any intervals before, then set new interval
          clearInterval(this.interval);
          this.interval = setInterval(() => { this.typeInstructions(); }, this.speed);
        }, 1500)
      }
    }
  }

  typeInstructions() {
    if (this.inputTextData != null) {
      if (this.i < this.inputTextData.length) {
        // Add a char from the instructionData to the shown text
        this.inputText += this.inputTextData.charAt(this.i);
        this.i++;
      } else {
        // Clear the interval once typing is complete
        clearInterval(this.interval);
      }
    } else {
      clearInterval(this.interval);
    }
  }

  onEmailSelect(index) {
    if (this.unreadList[index] == true) {
      this.unreadList[index] = false;
    }
    this.emailSelected = index;
    this.showEmailPane = true;
    this.onChangeStep([{ rule: 1, lesson: 1, step: 0 }]);
  }

  onChangeStep(activationCases) {
    activationCases.forEach(element => {
      if (this.goldenRuleNumber == element.rule && this.lessonNumber == element.lesson && this.stepNumber == element.step) {
        this.router.navigate(['/goldenrule', this.goldenRuleNumber, this.lessonNumber, this.stepNumber + 1]);
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe from route subscriptions
    this.sub.unsubscribe();
    this.ruleSub.unsubscribe();
    this.lessonSub.unsubscribe();
  }

}
