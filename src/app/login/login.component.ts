import { Component, OnInit,NgZone, ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/data/user.service';
import { AuthService } from '../service/auth.service';
import { IPlayerDTO, StoreFunc } from '../entity';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isValidPassword: boolean = true;
  isValidEmail:boolean = true;
   private _svc:UserService;
   private _auth:AuthService;
  

 public user: IPlayerDTO = {
    Email: '',
    UserName: '',
    FirstName: '',
    LastName: '',
    SessionId: '',
    UsedWord: '',
    PassWord:'',
    UserFound:true,
    Score:StoreFunc.getScore()

  };
    




  //todo: integrate with google one tap
  //cred:CredentialResponse = '';
  //prompt: PromptMomentNotification = '';
  constructor(private router: Router, private svc:UserService, private cdr: ChangeDetectorRef,private auth:AuthService) {
      this._svc = svc;
      this._auth = auth;
   }

  ngOnInit(): void {
   
  }


 handleLogin(){
 
  console.log(this.user);
  this.resetValidation();
  const res:any = '';
  this.validate();
    if (this.isValidPassword && this.isValidEmail) {
        console.log("at login");
        StoreFunc.setUserName(this.user.Email);  
        this.login();   
    }
   
  
}

login(){
   this._svc.LoginUser(this.user)
  .then((response) => {
    const rspe = JSON.parse(response);
    console.log(rspe);
   // StoreFunc.setSessionId(session.SessionId);
     //console.log('welcome url is '+welcomeUrl);
   // this.auth.signInExternal();
    //this.router.navigate(['/home"'], {queryParams: {name : this.user.UserName} });
  })
  .catch(error => {
    console.error('Error creating user:', error);
    console.log("time to move on");
    this.router.navigate([]);
  }); 
}





resetValidation(){
  this.isValidPassword = true;
  this.isValidEmail = true;
  this.cdr.detectChanges();
}
validate(){
 //return this.validateEmail() && this.validateUserName;
 return true;
}

validateUPassword(){
  const regexp = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10}$/);
  console.log("password "+regexp.test(this.user.PassWord));
  this.isValidPassword = regexp.test(this.user.PassWord);
  return this.isValidPassword

}

validateEmail(){
  
  const regexp = new RegExp(/([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/);
  console.log('user email is '+this.user.Email);
  console.log("email "+regexp.test(this.user.Email));
  this.isValidEmail = regexp.test(this.user.Email);
  return this.isValidEmail;

}

storeUserGoogleId(creds:any){
    console.log("creds are ",creds);
}
}

