import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem, MainMenuItem, MENU_ITEMS, SubMenuItem} from "../_models";
import {Observable} from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RouterChangeDetectionService {
  private subject = new Subject<any>();
  public menuItems:MainMenuItem[] = MENU_ITEMS;
  public selectedMenuItemIndex:number = 0;
  public selectedSubMenuItemIndex:number = 0;
  public subMenuItems:SubMenuItem[];

  constructor(private router:Router) {
    router.events.subscribe((val) => {
      console.log(val);
      this.onLocationChange(val.url);
    })

  }

  onLocationChange(path:String):void {
    for (let i = 0; i < this.menuItems.length; i++) {
      let found:boolean = false;
      let item:MainMenuItem = this.menuItems[i];

      if (item.menuRoute === path) {
        this.selectedMenuItemIndex = i;
        this.selectedSubMenuItemIndex = 0;
        break;
      }

      for (let j = 0; j < item.subMenuItems.length; j++) {
        let subitem:SubMenuItem = item.subMenuItems[j];
        if (subitem.menuRoute === path) {
          found = true;
          this.selectedSubMenuItemIndex = j;
          break;
        }
      }
      if (found) {
        this.selectedMenuItemIndex = i;
        break;
      }


    }
    console.log(this.selectedMenuItemIndex + " :: " + this.selectedSubMenuItemIndex);
    this.subMenuItems = this.menuItems[this.selectedMenuItemIndex].subMenuItems;
    this.subject.next(this.subMenuItems);
  }

  getSubMenuItems():Observable<SubMenuItem[]> {
    return this.subject.asObservable();
  }
}
