import {MenuItem, MainMenuItem, SubMenuItem} from './';

export const HomeSubMenu:SubMenuItem[] = [

];

export const MasterSubMenu:SubMenuItem[] = [
  {menuLabel: 'Accounts', menuStyle: 'list-group-item', menuRoute:'/accounts', submenuItemStyle:'fa fa-fw fa-bar-chart-o' },
  {menuLabel: 'RVM', menuStyle: 'list-group-item', menuRoute:'/rvm', submenuItemStyle:'fa fa-fw fa-table' }
];


export const ServicesSubMenu:SubMenuItem[] = [
  {menuLabel: 'Authorizations', menuStyle: 'list-group-item', menuRoute:'/auth', submenuItemStyle:'fa fa-fw fa-bar-chart-o' },
  {menuLabel: 'Invoice Management', menuStyle: 'list-group-item', menuRoute:'/invoice', submenuItemStyle:'fa fa-fw fa-table' },
];


export const PsWebMenu:SubMenuItem[] = [
  {menuLabel: 'Machine Listing', menuStyle: 'list-group-item', menuRoute:'/machinelisting', submenuItemStyle:'fa fa-fw fa-bar-chart-o' },
  {menuLabel: 'Store Details', menuStyle: 'list-group-item', menuRoute:'/storedetails', submenuItemStyle:'fa fa-fw fa-table' },
  {menuLabel: 'Pick-Up', menuStyle: 'list-group-item', menuRoute:'/pickup', submenuItemStyle:'fa fa-fw fa-bar-chart-o' },
];


export const AdminSubMenu:SubMenuItem[] = [
  {menuLabel: 'Sign-up Request', menuStyle: 'list-group-item', menuRoute:'/sign-up', submenuItemStyle:'fa fa-fw fa-bar-chart-o' },
  {menuLabel: 'Users Profiles', menuStyle: 'list-group-item', menuRoute:'/users-profile', submenuItemStyle:'fa fa-fw fa-table' },
  {menuLabel: 'Groups', menuStyle: 'list-group-item', menuRoute:'/groups', submenuItemStyle:'fa fa-fw fa-bar-chart-o' },
  {menuLabel: 'Roles', menuStyle: 'list-group-item', menuRoute:'/roles', submenuItemStyle:'fa fa-fw fa-table' },
  {menuLabel: 'Role Mapping', menuStyle: 'list-group-item', menuRoute:'/role-map', submenuItemStyle:'fa fa-fw fa-bar-chart-o' },
  {menuLabel: 'Group Mapping', menuStyle: 'list-group-item', menuRoute:'/group-map', submenuItemStyle:'fa fa-fw fa-table' },
  /*,
  {menuLabel: 'Settings', menuStyle: 'list-group-item', menuRoute:'/settings' }*/
];


export const MENU_ITEMS: MainMenuItem[] = [
  {menuLabel: 'HOME', menuStyle: 'glyphicon glyphicon-home', menuRoute:'/home' , subMenuItems: HomeSubMenu},
  {menuLabel: 'MASTER', menuStyle: 'glyphicon glyphicon-globe', menuRoute:'/master', subMenuItems:MasterSubMenu },
  {menuLabel: 'SERVICES', menuStyle: 'glyphicon glyphicon-wrench', menuRoute:'/services', subMenuItems: ServicesSubMenu },
  {menuLabel: 'PS-WEB', menuStyle: 'glyphicon glyphicon-globe', menuRoute:'/psweb', subMenuItems: PsWebMenu },
  {menuLabel: 'ADMIN', menuStyle: 'glyphicon glyphicon-user', menuRoute:'/admin', subMenuItems: AdminSubMenu }
];
