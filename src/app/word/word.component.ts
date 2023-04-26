import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { LetterComponent } from '../letter/letter.component';
import { WordService } from '../service/data/word.service';
import './word.component.css';



export class Hint{
  constructor(
      public id: number,
      public text:string, 
      public isRightOne: boolean){}
}

export class Word{
  
  constructor(
    public id: number,
    public text:string
  ){}
  
}


@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  //lettersArray:[IncomingWord] = []
 // _word: Word;
  _svc:WordService;
   _hints:Hint[] = [];
    _word:Word = new Word(0,"");
  letterArray: string[]=[''];
  letter_guess:string[]=['']
  constructor(
    private svc:WordService, 
    private cdr: ChangeDetectorRef
    //word:Word
    ) { 
    //  this._word = word;
      this._svc = svc;
  }
  
  
  
 
  ngOnInit(): void {
    this.processWord();
  
   
  }
    processWord():void {
      console.log(this._svc.getWord());
      let work = this._svc.getWord();  
      console.log(work.text); 
      this.letterArray = [...work.text];
      let numArrayElems = this.getRandomInt(1,4);
      for (let i = 0; i < this.letterArray.length+numArrayElems; i++) {
         this.letter_guess.push('');
      }
      this.cdr.detectChanges();
      console.log(this.letter_guess);
    }

    processHints():void {
      //let work = this._svc.getHint();

    }

     getRandomInt(min:number, max:number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }
    

}
