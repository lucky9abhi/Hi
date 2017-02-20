import { Route } from '@angular/router';
import {MachineListingComponent} from "./machineListing/machineListing.component";
import {StoreDetailsComponent} from "./storeDetails/storeDetails.component";
import {PickupComponent} from "./pickup/pickup.component";


export const PswebRouting: Route[] = [
  { path: 'psweb', redirectTo: '/machinelisting', pathMatch: 'full' },
  { path: 'machinelisting', component: MachineListingComponent },
  { path: 'storedetails', component: StoreDetailsComponent },
  { path: 'pickup', component: PickupComponent }
];
