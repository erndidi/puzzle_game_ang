import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})



export class WordService {

  private _http: HttpClient;
 

  constructor(private http: HttpClient) {
    this._http = http;   
  
  } 

  getWord(){
    let IncomingWord = {id: 1, text: "double", 
                        hints:[{id: 1,text:'two of everything', isRightOne:true}, 
                                {id:2, text:'a very bad thing', isRightOne:false},
                                {id:3, text:'this is a totally wrong hint', isRightOne:false}                              
                              
                              ]};
                                console.log('IncomingWord is '+IncomingWord);
    return IncomingWord;
  }



}
