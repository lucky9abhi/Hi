import { Component } from '@angular/core';
import {ContactComponent} from "../../../login/contact/contact.component";
import {FeedbackComponent} from "../../../login/feedback/feedback.component";
import {MdDialog} from "@angular/material";

@Component({
  selector: 'ir-footer',
  templateUrl: 'footer.component.html'
})
export class FooterComponent {

  constructor(
   public dialog: MdDialog) {

  }

  feedbackDialog(){
    this.dialog.open(FeedbackComponent);
  }
  contactDialog() {
    this.dialog.open(ContactComponent);
  }


}
