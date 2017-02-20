import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {PsWebComponent} from "./ps-web/ps-web.component";
import {InvoiceComponent} from "./invoice-mgmt/invoice.component";
import {AuthorizationComponent} from "./authorizations/authorization.component";


@NgModule({
  declarations: [
    AuthorizationComponent,
    InvoiceComponent,
    PsWebComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [ AuthorizationComponent,
    InvoiceComponent,
    PsWebComponent],
  providers: [

  ],
})
export class ServiceModule {

  constructor() {
  }

}
