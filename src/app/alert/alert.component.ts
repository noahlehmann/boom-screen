import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  time: number = Date.now();
  boomEndDate: Date = new Date(2022, 12, 2, 3, 0, 0, 0);
  timeToGo = {
    days: 1,
    hours: 2,
    minutes: 3
  };

  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.time = Date.now();
      let diff = this.boomEndDate.getTime() - this.time;
      this.timeToGo = {
        days: Math.floor(diff / (60 * 60 * 24 * 1000)),
        hours: 0,
        minutes: 0
      }
    }, 1000)
  }

}
