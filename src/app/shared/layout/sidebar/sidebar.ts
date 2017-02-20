import {Component, OnInit} from '@angular/core';
import {RouterChangeDetectionService} from './../../../_services/router-change-detection.service';
import {MenuItem, SubMenuItem} from "../../../_models";
;
@Component({
  selector: 'ir-sidebar',
  templateUrl: 'sidebar.html'
})

export class SidebarComponent implements OnInit {
  isActive = false;
  showMenu:string = '';
  subMenuItems:SubMenuItem[];

  eventCalled() {
    this.isActive = !this.isActive;
  }

  constructor(private routerService:RouterChangeDetectionService) {
  }

  ngOnInit() {
    this.routerService.getSubMenuItems().subscribe(subItems => {
      this.subMenuItems = subItems;
    })
  }

  addExpandClass(element:any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
}
