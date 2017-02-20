import { Route } from '@angular/router';
import {HomeComponent} from "./ir-home.component";

export const HomeRouting: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
];
