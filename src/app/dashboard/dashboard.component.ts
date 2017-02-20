import {Component, OnInit, OnDestroy } from '@angular/core';
import {Idle, DEFAULT_INTERRUPTSOURCES} from '@ng-idle/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ir-dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements  OnInit {
  model: any = {};
  timedOut: boolean = false;
  count: number = 0;
  IDLE_SECS:number = 10000;
  TIMEOUT_SEC:number = 10000;

  constructor(private router:Router,private idle: Idle) {
    this.setupIdleWatch();
  }

  ngOnInit(){
    this.idle.watch();
  }

  setupIdleWatch() {
    this.idle.setIdle(this.IDLE_SECS);
    this.idle.setTimeout(this.TIMEOUT_SEC);
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    this.idle.onIdleEnd.subscribe(() => this.timedOut = false );
    this.idle.onTimeout.subscribe(() => {
      this.timedOut = false;
      this.idle.stop();
      this.router.navigate(["/login"]);
    });
    this.idle.onTimeoutWarning.subscribe((countdown) => {
      this.count = countdown;
      this.timedOut = true;

    });
    //this.idle.watch();
  }

}
