import { Component, OnInit,Input,ChangeDetectorRef, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-misplaced',
  templateUrl: './misplaced.component.html',
  styleUrls: ['./misplaced.component.css']
})
export class MisplacedComponent implements OnInit {

  constructor() { }
 // @Input()  _misplaced:string[] = [];
  @Input() misplaced: string[]=[''];
  
   

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('misplaced is ',this.misplaced);
    let change = changes['misplaced'];
    if(!change.firstChange){
      console.log('change current value is ',change);
      this.misplaced = change.currentValue;
    }
  }

}
