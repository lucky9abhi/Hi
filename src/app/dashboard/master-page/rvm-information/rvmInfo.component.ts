import {Component, OnInit, PipeTransform, Pipe} from '@angular/core';
import * as _ from "lodash";
import {Installation} from "../../../_models/installation";
import {InstallationService} from "../../../_services/installation.service";

@Pipe({
  name: "dataFilter"
})
export class DataFilterPipe implements PipeTransform {
  transform(array: any[], account, city, slno: string): any {
    if (account) {
      return _.filter(array, row=>row.AccountName.indexOf(account) > -1)
    }
    if (city) {
      return _.filter(array, row=>row.City.indexOf(city) > -1)
    }
    if (slno) {
      return _.filter(array, row=>row.SerialNumber.indexOf(slno) > -1)
    }
    return array;
  }
}

@Component({
  selector: 'rvm-info',
  templateUrl: 'rvmInfo.component.html'
})

export class RVMInfoComponent implements OnInit{

  // jsonData:any;
  private search: string = null;

  ngOnInit() {
    this.loadComments()
  }

  // Local properties
  installation: Installation[];

  loadComments(){
    // Get all comments
    this.installationService.getComments()
      .subscribe(
        installations => {
          console.log(installations)
          this.installation = installations} , //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }

  constructor(
    private installationService: InstallationService
  ){}

}
