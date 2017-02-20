import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MachineListingComponent} from "./machineListing/machineListing.component";
import {PickupComponent} from "./pickup/pickup.component";
import {StoreDetailsComponent} from "./storeDetails/storeDetails.component";

@NgModule({
  declarations: [
   MachineListingComponent,
    PickupComponent,
    StoreDetailsComponent
  ],
  imports: [
    RouterModule,
     FormsModule,
     BrowserModule,
  ],
  exports: [MachineListingComponent, PickupComponent, StoreDetailsComponent],
  providers: [
  ],
})
export class PswebModule {

  constructor() {
  }

}
