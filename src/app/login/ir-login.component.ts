import {Component} from '@angular/core';
import {AuthenticationService} from "../_services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../_services/alert.service";
import {ContactComponent} from "./contact/contact.component";
import {MdDialog} from "@angular/material";
import {FeedbackComponent} from "./feedback/feedback.component";
import {ForgotComponent} from "./forgot/forgot.component";

@Component({
  selector: 'ir-login',
  templateUrl: 'ir-login.component.html'
})

export class LoginComponent {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
  public dialog: MdDialog) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  forgotDialog(){
    this.dialog.open(ForgotComponent);
  }
  feedbackDialog(){
    this.dialog.open(FeedbackComponent);
  }
  contactDialog() {
    this.dialog.open(ContactComponent);
  }


  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
