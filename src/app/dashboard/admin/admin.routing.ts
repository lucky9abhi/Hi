import {UserProfileComponent} from "./user-profiles/user-profiles.component";
import {GroupsComponent} from "./groups/groups.component";
import { Route } from '@angular/router';
import {SettingComponent} from "../../shared/setting/setting.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {RolesComponent} from "./roles/roles.component";
import {RoleMappingComponent} from "./role-mapping/role-mapping.component";
import {GroupMappingComponent} from "./group-mapping/group-mapping.component";


export const AdminRouting: Route[] = [
  {path: 'admin', redirectTo: '/sign-up', pathMatch: 'full'},
  {path: 'users-profile', component: UserProfileComponent},
  {path: 'groups', component: GroupsComponent},
  {path: 'setting', component:SettingComponent},
  {path: 'sign-up', component:SignUpComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'role-map', component:RoleMappingComponent},
  {path: 'group-map', component: GroupMappingComponent}
];
