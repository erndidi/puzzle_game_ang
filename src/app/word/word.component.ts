import { Component, OnInit, ChangeDetectorRef, Output, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { Subscription } from 'rxjs';
import { LetterComponent } from '../letter/letter.component';
import { WordService } from '../service/data/word.service';
import { WordObj } from '../entity';
import { Hint, HintComponent } from '../hint/hint.component';
import { MisplacedComponent } from '../misplaced/misplaced.component';
//import { ModalComponent } from '../modal/modal.component';
import './word.component.css';
import { Content, EndContent, EndHeading } from '../entity';
import { Observable } from 'rxjs';
declare var bootstrap: any;


//import { Hint } from '../entity';




ɵsetAllowDuplicateNgModuleIdsForTest

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
  //lettersArray:[IncomingWord] = []
  _incomingWord:any;
  response:any;
   _letter_of_rec: Word[]=[];

  _svc: WordService;
  @Output() misplaced: string[] = [];
  @Output() hints: Hint[] = [];
  @Output() content:Content = new Content(EndHeading(),EndContent());


  letterOfRec: string[] = [''];
  letter_guess: string[] = [''];
  //_modal: ModalComponent;
  constructor(
    private svc: WordService,
    private cdr: ChangeDetectorRef
    //private modal: ModalComponent

    //word:Word
  ) {
    
    this._svc = svc;

  }




  ngOnInit(): void {
    this.getWord();
  }

  processWord(): void {
    let work:WordObj = this.response;
    this.letterOfRec = [...work.Text];
    for (let i = 0; i < this.letterOfRec.length; i++) {
      this.letter_guess.push('');
    }
    
    this.cdr.detectChanges();
    //  console.log(this.letter_guess);
   // this.processHints(work);
  }

  getWord(){
  this._svc.getWordAndDefinitions().subscribe((result: WordObj) =>
   {
    this.response = result;
   // console.log('incoming word ', this.response);
   this.processWord();

   }); 
    
  } 


  processHints(incoming: any): void {
    this.hints = incoming.hints;
    sessionStorage.setItem("hints", JSON.stringify(this.hints));
    // console.log('hints are ',JSON.stringify(this.hints));

    //let work = this._svc.getHint();

  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  clearGame(){
     this.letter_guess=[""];
  }

  handleInput(event: any, idx: number) {
  
    
      if (this.letterOfRec[idx] === event.target.value) {
        this.letter_guess[idx] = event.target.value;
      } else {
        this.letter_guess[idx] = '';
        this.searchForMisplaced(event.target.value);
        event.target.value = '';
      }
      this.cdr.detectChanges();
  

  }

  onKeyUpEvent(event:any){
    console.log('keyup event');
    console.log(this.checkForWinner());
    if (this.checkForWinner() === true) {
      
    }
  }

  showModal(){
   var myModal = new bootstrap.Modal(document.getElementById('endModal'));
    myModal.show();
  }

  closeModal(){
   
  }

  endGame(event:any){
    this.clearGame();
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
