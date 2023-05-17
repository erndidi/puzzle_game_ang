import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
//import { environment } from 'src/environments/environment';
import { Utility } from '../entity';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private loginStatus = new BehaviorSubject<boolean>(this.loggedIn())
  private username = new BehaviorSubject<string>(localStorage.getItem('username')!)
  private _utility: Utility;

  constructor(private httpClient: HttpClient, utility:Utility) { 
    this._utility = utility;
  }

  public signOutExternal = () => {
      localStorage.removeItem("token");
      console.log("token deleted")
  }

  LoginEmail(username:string, password:string){
    
  }

  LoginWithGoogle(credentials: string): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json').
                                    set('Referrer-Policy','no-referrer-when-downgrade')
                                    .set("Access-Control-Allow-Origin", "http://localhost:4200")
                                    .set('Access-Control-Allow-Credentials', "true");
    return this.httpClient.post("https://localhost:7274/" + "LoginWithGoogle", JSON.stringify(credentials), { headers: header, withCredentials: true });
  }
/*
  LoginWithFacebook(credentials: string): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.post(this._utility.rtnApiUrl() + "LoginWithFacebook", JSON.stringify(credentials), { headers: header, withCredentials: true });
  }
*/
  login(loginModel:any): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');

    return this.httpClient.post("https://localhost:7274/" + 'Login', JSON.stringify(loginModel), { headers: header, withCredentials: true })
    
  }

  getClient(): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get("https://localhost:7274/" + "GetColorList", { headers: header, withCredentials: true });
  }

  
  refreshToken(): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.get("https://localhost:7274/" + "RefreshToken", { headers: header, withCredentials: true });
  }

  revokeToken(): Observable<any> {
    const header = new HttpHeaders().set('Content-type', 'application/json');
    return this.httpClient.delete("https://localhost:7274/" + "RevokeToken/" + this.username.value, { headers: header, withCredentials: true });
  }

  saveToken(token:string) {
    localStorage.setItem('token', token)
  }

  saveUsername(username:string) {
    localStorage.setItem('username', username)
  }

  loggedIn(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  setLoginStatus(val:any) {
    this.loginStatus.next(val)
  }

  setUsername(val:any) {
    this.username.next(val)
  }


}