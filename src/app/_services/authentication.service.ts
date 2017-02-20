import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {Subject} from 'rxjs/Subject';


@Injectable()
export class AuthenticationService {
  constructor(private http:Http) {
  }

  private subject = new Subject<any>();
  user: any;

  login(username:string, password:string) {
    return this.http.post('/api/authenticate', JSON.stringify({username: username, password: password}))
      .map((response:Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.subject.next(user);
        }
      });
  }

  getCurrentUserFromLocalStorage():Observable<any> {
    return this.subject.asObservable();
  }

  setCurrentUserFromLocalStorage(user:any):void{
    console.log("inside set current user :: " + user);
    this.user = user;
    this.subject.next(user);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
