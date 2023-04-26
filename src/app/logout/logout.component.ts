import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  _hardcodeAuthServ: HardcodedAuthenticationService;
  
  constructor(hardcodeAuthServ: HardcodedAuthenticationService) { 
    this._hardcodeAuthServ = hardcodeAuthServ;
  }

  ngOnInit(): void {
    this._hardcodeAuthServ.logout()
  }

}
