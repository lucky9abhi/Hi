import {AccountsDataComponent} from "./accounts/accounts.component";
import {RVMInfoComponent} from "./rvm-information/rvmInfo.component";
import { Route } from '@angular/router';


export const MasterRouting: Route[] = [
  {path: 'master', redirectTo: '/accounts', pathMatch: 'full'},
  { path: 'accounts', component: AccountsDataComponent },
  { path: 'rvm', component: RVMInfoComponent },
];
