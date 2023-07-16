import { Component, OnInit, ChangeDetectorRef, Output, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { WordService } from '../service/data/word.service';
import { IDefinition, IWordObj } from '../entity';
import './word.component.css';
import { Content, EndContent, EndHeading, StoreFunc } from '../entity';
import { Router } from '@angular/router';


declare var bootstrap: any;


//import { Hint } from '../entity';




//ɵsetAllowDuplicateNgModuleIdsForTest

export class Word {

  constructor(
    public id: number,
    public text: string
  ) { }

}




@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {
  _router:Router;
  _incomingWord:any;
  response:any;
   _letter_of_rec: IWordObj[]=[];
  _svc: WordService;
  @Output() misplaced: string[] = [];
  definitions: IDefinition[] = [];
  @Output() wordId: number = 0;
  word: string = "";
  isWinner:boolean = false;
  @Output() content:Content = new Content(EndHeading(),EndContent());


  letterOfRec: string[] = [];
  letter_guess: string[] = [];
  //_modal: ModalComponent;
  constructor(
    private svc: WordService,
    private cdr: ChangeDetectorRef,
    private router:Router
    //private modal: ModalComponent

    //word:Word
  ) {
    
    this._svc = svc;
    this._router = router;

  }
  ngOnInit(): void {
    StoreFunc.setWordInStore('*');
    StoreFunc.setSessionId('*');
    this.startNewGame();
  }

  processWord(): void {
    let work:IWordObj = this.response;
    this.word = work.Text;
    console.log('work is ',work);
    this.letterOfRec = [...work.Text];
    this.letterOfRec.forEach(element => {
      this.letter_guess.push('');
    });
    
   
    this.wordId = work.Id;
    this.definitions = work.Definitions;
    
    
    this.cdr.detectChanges();
    //  console.log(this.letter_guess);
   // this.processHints(work);
  }

  startNewGame(){
  const wrd = StoreFunc.getWordFromStore();
  const sessionid = StoreFunc.getSessionId();
  this._svc.getWordAndDefinitions(wrd,sessionid).subscribe((result: IWordObj) =>
   {
    this.response = result;
    console.log('incoming word ', this.response);
   this.processWord();

   }); 
    
} 

public EndGame() {
  this.isWinner = false;
  this.letter_guess=[""];
  this.startNewGame();
  
}

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  handleInput(event: any, idx: number) {
    
      if (this.letterOfRec[idx] === event.target.value) {
        this.letter_guess[idx] = event.target.value;
      } else {
        this.letter_guess[idx] = '';
        this.searchForMisplaced(event.target.value);
        event.target.value = '';
      }
      if(this.checkForWinner()){
        const storedWrd = StoreFunc.getWordFromStore();
        StoreFunc.setWordInStore(JSON.stringify(storedWrd+","+this.letter_guess));
        console.log(StoreFunc.getWordFromStore());
      
      }
      this.cdr.detectChanges();
  

  }

  onKeyUpEvent(event:any){
    //console.log('keyup event');
   // console.log(this.checkForWinner());
    if (this.checkForWinner() === true) {
        this.isWinner=true;
    }
  }



 

  checkForWinner() {
    let hasMatch: Boolean = true;
    this.letterOfRec.forEach((element, idx) => {
      if (!(element === this.letter_guess[idx])) {
        hasMatch = false;
      }

    });
    return hasMatch;
  }

  searchForMisplaced(letter: string) {
    console.log('letter is ', letter);
    let outString = this.letterOfRec.toString()
    let isLetterInWord = this.searchForLetterInArray(letter, outString);
    console.log('hasNotBeenRec ', isLetterInWord);
    if (isLetterInWord) {
      let misplacedString = this.misplaced.toString();
      let alreadyBeenNoted = this.searchForLetterInArray(letter, misplacedString);
      if (!alreadyBeenNoted) {
        console.log('search misplaced');
        this.misplaced.push(letter);
        console.log('has been misplaced is ', this.misplaced);
        this.cdr.detectChanges();
      }

    }


  }




  searchForLetterInArray(letter: string, inString: string) {
    let inArray = inString.split(',')

    return inArray.some((element) => element.includes(letter));
  }




  trackByFn(index: number, item: string) {
    return index;
  }



}
