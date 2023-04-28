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
    let test = sessionStorage.getItem("hints");
    console.log('hints in hint.component.ts ', test);
  }
  

  

  trackByFn(index: number, hint:Hint) {
    return hint.id;
  }

}
