import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "./_guards/auth.guard";
import {AdminRouting} from "./dashboard/admin/admin.routing";
import {ServiceRouting} from "./dashboard/services-comp/service.routing";
import {MasterRouting} from "./dashboard/master-page/master.routing";
import {HomeRouting} from "./home/home.routing";
import {ContactComponent} from "./login/contact/contact.component";
import {PswebRouting} from "./dashboard/ps-web/ps-web.routing";
import {FeedbackComponent} from "./login/feedback/feedback.component";
import {ForgotComponent} from "./login/forgot/forgot.component";

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      ...HomeRouting,
      ...AdminRouting,
      ...ServiceRouting,
      ...MasterRouting,
      ...PswebRouting,
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'forgot', component: ForgotComponent },

  // otherwise redirect to login
  { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
