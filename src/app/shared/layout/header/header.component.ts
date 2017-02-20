import {Component, OnInit} from '@angular/core';
import {User} from "../../../_models/user";
import {UserService} from "../../../_services/user.service";

@Component({
  selector: 'ir-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {

  currentUser: User;

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {

  }

}
