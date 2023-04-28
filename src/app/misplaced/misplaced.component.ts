import { Component, OnInit,Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-misplaced',
  templateUrl: './misplaced.component.html',
  styleUrls: ['./misplaced.component.css']
})
export class MisplacedComponent implements OnInit {

  constructor() { }
  @Input()  misplacedLetters:string[] = [];
  
   

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    let change = changes['hints'];
    if(!change.firstChange){
      this.misplacedLetters = change.currentValue;
    }
  }

}
