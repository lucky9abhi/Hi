import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'contact',
  templateUrl: 'contact.component.html'
})
export class ContactComponent implements OnInit {
  model: any = {};
  loading = false;
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

}
