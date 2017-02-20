import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "./../_services/authentication.service";

@Directive({
  selector: '[has-admin-permission]'
})
export class UserPermissionDirective implements OnInit {

  constructor(private el:ElementRef, private authenticationService:AuthenticationService) {

  }

  ngOnInit() {

    this.authenticationService.getCurrentUserFromLocalStorage().subscribe(user =>{
      let hasPermission:boolean = false;
      this.el.nativeElement.style.display = 'none';
      if(<string>(user.userrole).toUpperCase() == 'ADMIN'){
        hasPermission = true;
        this.el.nativeElement.style.display = 'block'
      }
      console.log(user )
      console.log(hasPermission )

    })
  }

}
