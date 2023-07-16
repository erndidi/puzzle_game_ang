import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { WordComponent } from '../word/word.component';

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
   

  }
  



}
