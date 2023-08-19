import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

  @Input() score:number=0;
  @Input() endTime:number=0;
  @Input() username:string="";
  showEveryone:boolean=false;
  showFriends:boolean=true;


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('score' in changes) {
      // const currentScore = changes['score'].currentValue;
      // Perform actions based on the changes in the 'score' input property
    }
  }

  seeFriends(){
    this.showFriends = true;
  }

  seeEveryone(){
    this.showEveryone = true;
  }

}
