import { NgModule } from '@angular/core';
import { AppComponent }  from './app.component';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import {routing} from "./app.routing";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeaderComponent} from "./shared/layout/header/header.component";
import {NavbarComponent} from "./shared/layout/navbar/navbar.component";
import {AuthGuard} from "./_guards/auth.guard";
import {AlertService} from "./_services/alert.service";
import {AuthenticationService} from "./_services/authentication.service";
import {UserService} from "./_services/user.service";
import {RouterChangeDetectionService} from "./_services/router-change-detection.service";
import {HighlightMenuItemDirective} from './_directives/highlight-menu.directive';

//Used for fake-backend service
import {fakeBackendProvider} from "./_helpers/fake-backend";
import {MockBackend} from "@angular/http/testing";
import {BaseRequestOptions} from '@angular/http';

import {AlertComponent} from "./_directives/alert.component";
import {InstallationService} from "./_services/installation.service";
import {AdminModule} from "./dashboard/admin/admin.module";
import {ServiceModule} from "./dashboard/services-comp/service.module";
import {MasterModule} from "./dashboard/master-page/master.module";
import {HomeModule} from "./home/home.module";
import {SharedModule} from "./shared/shared.module";
import {UserPermissionDirective} from './_directives/has-admin-permission.directive';
import {NgIdleKeepaliveModule} from '@ng-idle/keepalive';
import {SettingComponent} from "./shared/setting/setting.component";
import {ContactComponent} from "./login/contact/contact.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {SidebarComponent} from "./shared/layout/sidebar/sidebar";
import {PswebModule} from "./dashboard/ps-web/ps-web.module";
import {FeedbackComponent} from "./login/feedback/feedback.component";
import {ForgotComponent} from "./login/forgot/forgot.component";

@NgModule({
  imports: [
    AdminModule,
    ServiceModule,
    MasterModule,
    HomeModule,
    SharedModule,
    PswebModule,
    routing,
    NgIdleKeepaliveModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HeaderComponent,
    NavbarComponent,
    AlertComponent,
    SettingComponent,
    UserPermissionDirective,
    HighlightMenuItemDirective,
    ContactComponent,
    FooterComponent,
    SidebarComponent,
    FeedbackComponent,
    ForgotComponent,
  ],
  providers: [
    InstallationService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    RouterChangeDetectionService,

    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
