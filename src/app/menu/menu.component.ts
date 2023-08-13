import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  //_hdService: HardcodedAuthenticationService;

  constructor() {
    // this._hdService = hardcodedAuthenticationService;
   }

  ngOnInit(): void {
    //this.isUserLoggedIn = this._hdService.isUserLoggedIn();
    console.log('menu user logged in is '+this.isUserLoggedIn);
  }

}
