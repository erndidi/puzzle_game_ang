import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
  
     if (username === "ern" && password === 'dummy') {       
        return true;
      }
    else {
      return false;
    }

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    if (user === null) {
      return false;
    } else
      return true;
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
