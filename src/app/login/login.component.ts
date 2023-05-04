import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
//import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  validLogin = false;
  //todo: integrate with google one tap
  //cred:CredentialResponse = '';
  //prompt: PromptMomentNotification = '';
  constructor(private router: Router, private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

    handleLogin(){
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
        this.router.navigate(['welcome', this.username])
        sessionStorage.setItem('authenticatedUser',this.username);
        this.validLogin = true;
      }
     
      
    }

}

