import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/data/user.service';
import { AuthService } from '../service/auth.service';
import { IPlayerDTO, StoreFunc } from '../entity';
import { FormsModule } from '@angular/forms';
import { JWT_OPTIONS } from '@auth0/angular-jwt';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public isValidPassword: boolean = true;
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

  constructor(private router: Router, private svc:UserService, private cdr: ChangeDetectorRef,private auth:AuthService) { 
    this._svc = svc;
    this._auth = auth;
  }

  ngOnInit(): void {
  }

 /* async signIn(){
    this.resetValidation();
    if(this.validate()){
        this._svc.CreateUser(this.user)
     .then((response) => {
       const session = JSON.parse(response);
       console.log("sessoin is "+session)
       StoreFunc.setSessionId(session.SessionId);
        console.log("return from sign in is "+JSON.parse(session));
       this.auth.signInExternal();
       this.router.navigate(['/home"'], {queryParams: {name : this.user.UserName} });
     })
     .catch(error => {
       console.error('Error creating user:', JSON.parse(error));
       console.log("time to move on");
       this.router.navigate([]);
     }); 
    }   
    
   }
   */

  async signIn(){
    const response =  await this._svc.CreateUser(this.user);
    await console.log("resp is "+response);

   }
   resetValidation(){
    this.isValidPassword = true;
    this.isValidEmail = true;
    this.cdr.detectChanges();
  }
  validate(){
   return this.validateEmail() && this.validatePassword();
   return true;
  }
  
  validatePassword(){
    const regexp = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{2,}$/);
    console.log("password "+regexp.test(this.user.PassWord));
    this.isValidPassword = regexp.test(this.user.PassWord);
    console.log('isvalidpw '+this.isValidPassword);
    return this.isValidPassword
  
  }
  
  validateEmail(){
    
    const regexp = new RegExp(/([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/);
   console.log('user email is '+this.user.Email);
  console.log("email "+regexp.test(this.user.Email));
    this.isValidEmail = regexp.test(this.user.Email);
    return this.isValidEmail;
  
  }

}
