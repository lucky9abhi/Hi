import {NgModule} from '@angular/core';
import {UserProfileComponent} from "./user-profiles/user-profiles.component";
import {GroupsComponent} from "./groups/groups.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {RolesComponent} from "./roles/roles.component";
import {RoleMappingComponent} from "./role-mapping/role-mapping.component";
import {GroupMappingComponent} from "./group-mapping/group-mapping.component";
import {DataTableModule} from "angular2-datatable";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UserProfileComponent,
    GroupsComponent,
    SignUpComponent,
    RolesComponent,
    RoleMappingComponent,
    GroupMappingComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    DataTableModule,
    FormsModule,
  ],
  exports: [
    UserProfileComponent,
    GroupsComponent,
    SignUpComponent,
    RolesComponent,
    RoleMappingComponent,
    GroupMappingComponent],
  providers: [

  ],
})
export class AdminModule {

  constructor() {
  }

}
