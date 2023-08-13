import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IDefinition } from '../entity';






@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {
 @Input() definitions: IDefinition[]=[];
 @Input() wordId:number=0; 
  
  constructor() { 
  }

  ngOnInit(): void {
 
  }
  

  ngOnChanges(changes: SimpleChanges) {
    let change = changes["definitions"];
    console.log('hints are ',this.definitions) ;
  //  console.log('word id  ',this.wordId) ;
    if(!change.firstChange){
      this.definitions = change.currentValue;
    }
  }

  handleHintRequst(){
    console.log('handleHintReq')
    let workHints = this.definitions;
    let rightDefIndex = workHints.findIndex(o => o.WordId === this.wordId);
    
     // Exclude the rightDefIndex from the array of possible indices to remove
  let possibleIndices = Array.from({length: workHints.length}, (_, i) => i).filter(i => i !== rightDefIndex);

  // Select a random index from the array of possible indices
  let randomIndex = possibleIndices[Math.floor(Math.random() * possibleIndices.length)];

  // Remove the element at the randomly selected index
  workHints.splice(randomIndex, 1);
   this.definitions = workHints;
  
  }

  

  trackByFn(index: number, hint:IDefinition) {
    return hint.Id ;
  }

}
