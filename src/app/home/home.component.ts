import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rules = [];

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.rules = this.dataService.data;
  }

}
