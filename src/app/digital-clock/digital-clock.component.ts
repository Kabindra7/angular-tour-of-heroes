import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {

  constructor() { }
  todayDateTime
  ngOnInit() {
    let timeoutId = setInterval(() => {
     this.todayDateTime = new Date();
     //this.now = ('0'+time.getHours()).substr(-2) + ('0'+time.getMinutes()).substr(-2) + ('0'+time.getSeconds()).substr(-2);
   }, 1000);
  }

}
