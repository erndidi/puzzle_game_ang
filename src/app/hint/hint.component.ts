import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';



export class Hint{
  constructor(
      public id: number,
      public text:string, 
      public isRightOne: boolean){}
}

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {
 @Input() hints: Hint[] = [];
  
  constructor() { 
  }

  ngOnInit(): void {
    
  }
  

  ngOnChanges(changes: SimpleChanges) {
    let change = changes['hints'];
    if(!change.firstChange){
      this.hints = change.currentValue;
    }
  }

  handleHintRequst(){
    console.log('handleHintReq')
    let workHints = this.hints;
    let len = workHints.length;
    
    let haveGoner = false;
    
    while(!haveGoner)
    {
      let idx = Math.floor(Math.random()*len);
      if(!workHints[idx].isRightOne)
      {
        workHints.splice(idx,1);
        console.log(workHints);
        this.hints=workHints;
        haveGoner=true;
      }
    } 


  }

  

  trackByFn(index: number, hint:Hint) {
    return hint.id;
  }

}
