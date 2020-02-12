import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'receipe-book';
  featureSelected: string;
  
  constructor() {
    this.featureSelected = '';

  }
  navigateTopNavBar(event: string) {
    this.featureSelected = event;
  }
  ngOnInit() {

  }
}
