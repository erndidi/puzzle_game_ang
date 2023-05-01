import { Component, OnInit, ChangeDetectorRef, Output } from '@angular/core';
import { LetterComponent } from '../letter/letter.component';
import { WordService } from '../service/data/word.service';
import { Hint, HintComponent } from '../hint/hint.component';
import { MisplacedComponent } from '../misplaced/misplaced.component';
import './word.component.css';


//import { Hint } from '../entity';





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
  // _word: Word;

  _svc: WordService;
  @Output() misplaced: string[] = [];
  @Output() hints: Hint[] = [];

  _word: Word = new Word(0, "");
  letterArray: string[] = [''];
  letter_guess: string[] = ['']
  constructor(
    private svc: WordService,
    private cdr: ChangeDetectorRef
    //word:Word
  ) {
    //  this._word = word;
    this._svc = svc;
  }




  ngOnInit(): void {
    this.processWord();


  }
  processWord(): void {
    //console.log(this._svc.getWord());
    let work = this._svc.getWord();
    // console.log(work.text); 
    this.letterArray = [...work.text];
    let numArrayElems = this.getRandomInt(1, 4);
    for (let i = 0; i < this.letterArray.length + numArrayElems; i++) {
      this.letter_guess.push('');
    }
    this.cdr.detectChanges();
    //  console.log(this.letter_guess);
    this.processHints(work);
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

  handleInput(event: any, idx: number) {
    if (this.letterArray[idx] === event.target.value) {
      this.letter_guess[idx] = event.target.value;
    } else {
      this.letter_guess[idx] = '';
      this.searchForMisplaced(event.target.value);
      event.target.value = '';
    }

    //console.log('letter guess '+this.letter_guess[idx]);
    // console.log('all letter guess '+this.letter_guess);
    this.cdr.detectChanges();

  }

  searchForMisplaced(letter: string) {
    console.log('letter is ', letter);
    let outString = this.letterArray.toString()
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
