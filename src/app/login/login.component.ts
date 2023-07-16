import { Component, OnInit,NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/data/user.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username = '';
  password = '';
  validLogin = false;
  private _svc:UserService;




  //todo: integrate with google one tap
  //cred:CredentialResponse = '';
  //prompt: PromptMomentNotification = '';
  constructor(private router: Router, private svc:UserService) {
      this._svc = svc;
   }

  ngOnInit(): void {
    
  }

 

handleLogin(){

  

}

storeUserGoogleId(creds:any){
    console.log("creds are ",creds);
}

}

