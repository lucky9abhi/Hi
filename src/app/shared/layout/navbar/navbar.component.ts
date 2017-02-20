import {Component, OnInit} from '@angular/core';
import {User, MenuItem, MENU_ITEMS} from "../../../_models";
import {AuthenticationService} from './../../../_services/authentication.service';
import {RouterChangeDetectionService} from './../../../_services/router-change-detection.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ir-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public isAdmin:boolean = false;
  user:User[];
  menuItems:MenuItem[];

  constructor(private authenticationService:AuthenticationService, private routerService:RouterChangeDetectionService, private router:Router) {
  }

  ngOnInit() {
    this.menuItems = this.routerService.menuItems;
    if (this.authenticationService.user) {
      let user:any = this.authenticationService.user;
      if (user.userrole == 'admin') {

        this.isAdmin = true;
      }
    }
    this.authenticationService.getCurrentUserFromLocalStorage().subscribe(user => {
      if (user.userrole == 'admin') {
        this.isAdmin = true;
      }

    })
  }
}
