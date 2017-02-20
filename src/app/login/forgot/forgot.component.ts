import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'forgot',
  templateUrl: 'forgot.component.html'
})
export class ForgotComponent implements OnInit {
  model: any = {};
  loading = false;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
