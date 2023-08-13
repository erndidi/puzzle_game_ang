import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:'<h1>todo</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadLogin:boolean=false;
  loadFAQ:boolean=false;
  _auth:AuthService;
  openSidenav = false;
  onToggle(){
    
  }

    constructor(private auth:AuthService){
        this._auth = auth;
    }
    
    
  

}
