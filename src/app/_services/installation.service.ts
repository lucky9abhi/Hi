/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Installation }  from '../_models/installation';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class InstallationService {


  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private installationUrl = '/data/Installations';

  // Fetch all existing comments
  getComments() : Observable<Installation[]>{
    console.log("inside getcomments");
    // ...using get request
    return this.http.get(this.installationUrl)
    // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
