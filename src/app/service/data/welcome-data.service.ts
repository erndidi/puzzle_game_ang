import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelloWorldBean } from 'src/app/entity';
import { WordObj } from 'src/app/entity';


@Injectable({
  providedIn: 'root'
})


@Injectable()
export class WelcomeDataService {
  private _http: HttpClient;
 // private _bean:HelloWorldBean;
  constructor(private http: HttpClient) {
    this._http = http;
    //this._bean = bean;
  } 

  executeHelloWorldBeanService() {
   
      console.log('hit bean service');
      return this._http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean/ern");

  }

  executeHelloWorldBeanServiceWithVar(name:string) {
   
    console.log('hit bean service');
    return this._http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`);

}

executeGetWords(name:string){
  let authHeaderString = this.createBasicAuthenticationHttpHeader();
  let headers = new HttpHeaders({
    Authorization:authHeaderString
  });
  console.log('hit execute words service');
  return this._http.get<WordObj>(`http://localhost:8080//users/words/{username}`,
   {headers});
}

  createBasicAuthenticationHttpHeader(){
     let username ='ern';
     let password = 'dummy';
     let authHeaderString = 'Basic'+window.btoa(username+':'+password);
     return authHeaderString;
  }
 
}
