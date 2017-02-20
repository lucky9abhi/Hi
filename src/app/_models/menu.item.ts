export class MenuItem{
  menuLabel:string;
  menuStyle:string;
  menuRoute:string;

}

export class SubMenuItem extends  MenuItem{
  submenuItemStyle:string;
}

export class MainMenuItem extends MenuItem{
  subMenuItems: SubMenuItem[];
}


