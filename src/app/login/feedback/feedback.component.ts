import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'feedback',
  templateUrl: 'feedback.component.html'
})
export class FeedbackComponent implements OnInit {
  model: any = {};
  loading = false;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
