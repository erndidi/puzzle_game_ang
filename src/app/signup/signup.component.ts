import { Component, OnInit } from '@angular/core';
import { User } from '../entity';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:User = new User();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form.value);
  }

 
  

}
