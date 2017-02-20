import {InvoiceComponent} from "./invoice-mgmt/invoice.component";
import {AuthorizationComponent} from "./authorizations/authorization.component";
import { Route } from '@angular/router';


export const ServiceRouting: Route[] = [
  {path: 'services', redirectTo: '/auth', pathMatch: 'full'},
  { path: 'auth', component: AuthorizationComponent },
  { path: 'invoice', component: InvoiceComponent },
];


