import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message: string  = '';
  messageFromService:string='';
  name:string = this.route.snapshot.params['name'];
  _service:WelcomeDataService;
  constructor(private route:ActivatedRoute, service:WelcomeDataService) { 
      this._service = service;
  }

  ngOnInit(): void {
    console.log(this.message);
    console.log(this.route.snapshot.params['name']);

  }
   getWelcomeMessage(){
    this._service.executeHelloWorldBeanService().subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
    );
    
   }

   getWelcomeMessageWithVar(){
    this._service.executeHelloWorldBeanServiceWithVar(this.name).subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
    );
    
   }

   getWords(){
    this._service.executeGetWords(this.name).subscribe(
        response => this.handleSuccessfulResponse(response),
        error => this.handleErrorResponse(error)
    );
    
   }



   handleErrorResponse(error:any){
      console.log(error);
      console.log(error.error);
      console.log(error.error.message);
   }

   handleSuccessfulResponse(response:any){
     this.messageFromService = response.message;
  }


}
