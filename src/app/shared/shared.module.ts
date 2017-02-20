// Angular Modules
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http} from '@angular/http';
import {RouterModule} from '@angular/router';


import {MaterialModule} from '@angular/material';

import {DataTableModule} from "angular2-datatable";
import {DropdownModule} from "ngx-dropdown";

/**
 * @module SharedModule
 * @description
 * SharedModule, common module for the whole application,
 * all other modules like 3rd modules must be imported over here.
 */
@NgModule({
  declarations: [

  ],
  imports: [
    // Angular modules.
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    MaterialModule.forRoot(), // material design for ng2.
  ],
  exports: [
    // Angular modules
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    //angular-table
    DataTableModule,

    DropdownModule,

  ],
  providers: [

  ]
})
export class SharedModule {

  constructor() {
  }
}

