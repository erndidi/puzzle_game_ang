import { Component, OnInit,NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
//import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
//import { environment } from 'src/environments/environment';
import { Utility } from '../entity';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  username = '';
  password = '';
  validLogin = false;
  private _utility:Utility;




  //todo: integrate with google one tap
  //cred:CredentialResponse = '';
  //prompt: PromptMomentNotification = '';
  constructor(private router: Router, private service:AuthService,  private _ngZone: NgZone, private utility:Utility) {
      this._utility = utility;
   }

  ngOnInit(): void {
      // @ts-ignore
     /* window.onGoogleLibraryLoad = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: this._utility.rtnClientId(),
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });
      // @ts-ignore
      google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById("buttonDiv"),
        { theme: "outline", size: "large", width: "100%" } 
      );
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {});
    };
    */
  }

  async handleCredentialResponse(response: any) {
    console.log(response);
   /* await this.service.LoginWithGoogle(response.credential).subscribe(
      (x:any) => {
        this.storeUserGoogleId(response.credential);
        this._ngZone.run(() => {
          this.router.navigate(['/welcome']);
        })},
      (error:any) => {
          console.log(error);
        }
      );  
       */
}

handleLogin(){

  

}

storeUserGoogleId(creds:any){
    console.log("creds are ",creds);
}

}

