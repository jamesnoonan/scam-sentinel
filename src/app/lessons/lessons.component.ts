import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  rulesData = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.rulesData = this.dataService.data;
  }

}
