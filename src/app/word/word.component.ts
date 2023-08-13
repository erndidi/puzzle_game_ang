import { Component, OnInit, ChangeDetectorRef, Output } from '@angular/core';
import { WordService } from '../service/data/word.service';
import { IDefinition, IWordObj,Content,EndContent,EndHeading,StoreFunc } from '../entity';
import './word.component.css';
import { Router } from '@angular/router';
import { MatInput } from '@angular/material/input';


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
   _letterCount:number=0;
  _svc: WordService;
  @Output() misplaced: string[] = [];
  definitions: IDefinition[] = [];
  @Output() wordId: number = 0;
  word: string = "";
  isWinner:boolean = false;
  @Output() content:Content = new Content(EndHeading(),EndContent());
  isLoading:boolean = false;


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
     this.cdr.detectChanges();
  }

  

  processWord(rspe:any): void {
    let work:IWordObj = rspe;
    this.word = work.Text;
    console.log('work is ',work);
    this.letterOfRec = [...work.Text];
    this.letterOfRec.forEach(element => {
      this.letter_guess.push('');
      this._letterCount = this.letterOfRec.length;
    });
    
   
    this.wordId = work.Id;
    this.definitions = work.Definitions;
    this.isLoading= false;
    
    
   
    //  console.log(this.letter_guess);
   // this.processHints(work);
  }

  startNewGame(){
  const wrd = StoreFunc.getWordFromStore();
  const sessionid = StoreFunc.getSessionId();
  this.isLoading =true;
  this._svc.getWordAndDefinitions(wrd,sessionid).subscribe((result: IWordObj) =>
   {
    this.response = result;
    console.log('incoming word ', this.response);
   this.processWord(this.response);

   }); 
    
} 

public endGame() {
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
        this.handleScore();
        if(storedWrd===null){
          StoreFunc.setWordInStore(this.letterOfRec.toString());
        } else{
              StoreFunc.setWordInStore(JSON.stringify(storedWrd+","+this.letterOfRec.toString()));
        }    
      }
      this.cdr.detectChanges();
  }

  onKeyUpEvent(event:any){
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

  handleScore(){
    const oldScore = StoreFunc.getScore();
    StoreFunc.setScore(oldScore+this._letter_of_rec.length);
  }



  searchForLetterInArray(letter: string, inString: string) {
    let inArray = inString.split(',')

    return inArray.some((element) => element.includes(letter));
  }




  trackByFn(index: number, item: string) {
    return index;
  }



}
