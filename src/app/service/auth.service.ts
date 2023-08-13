import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
//import { environment } from 'src/environments/environment';
import { Utility } from '../entity';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private loginStatus = new BehaviorSubject<boolean>(false);
  constructor() { 
 
  }

  public signInExternal(){
    this.loginStatus.next(true);
  }
  public signOutExternal() {
      this.loginStatus.next(false);
  }

 

}