import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/data/user.service';
import { AuthService } from '../service/auth.service';
import { IUserDTO, StoreFunc } from '../entity';
import { FormsModule } from '@angular/forms';


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
   
   public user: IUserDTO = {
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

  signIn(){
     this._svc.CreateUser(this.user)
     .then((response) => {
       const session = JSON.parse(response);
       StoreFunc.setSessionId(session.SessionId);
        //console.log('welcome url is '+welcomeUrl);
       this.auth.signInExternal();
       this.router.navigate(['/home"'], {queryParams: {name : this.user.UserName} });
     })
     .catch(error => {
       console.error('Error creating user:', error);
       console.log("time to move on");
       this.router.navigate([]);
     });  
      
   }


}
