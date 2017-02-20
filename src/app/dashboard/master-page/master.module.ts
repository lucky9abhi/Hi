import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AccountsDataComponent} from "./accounts/accounts.component";
import {RVMInfoComponent, DataFilterPipe} from "./rvm-information/rvmInfo.component";
import {DataTableModule} from "angular2-datatable";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    AccountsDataComponent,
    RVMInfoComponent,
    DataFilterPipe
  ],
  imports: [
     RouterModule,
     DataTableModule,
     FormsModule,
     BrowserModule,
  ],
  exports: [AccountsDataComponent, RVMInfoComponent, DataFilterPipe],
  providers: [
  ],
})
export class MasterModule {

  constructor() {
  }

}
