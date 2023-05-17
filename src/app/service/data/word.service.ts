import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { WordObj } from 'src/app/entity';
import { Definition } from 'src/app/model/word';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})



export class WordService {

  private _http: HttpClient;
  private _url = "WordAPI";
 

  constructor(private http: HttpClient) {
    this._http = http;   
  
  } 
  public getWordAndDefinitions(): Observable<WordObj> {
    let url = `${environment.apiUrl}/${this._url}`;
    console.log('url is ', url);
  
    return this._http.get<any>(url).pipe(
      map(response => {
       // const words: WordObj = new WordObj();
         console.log('response is ',response);
          const word = new WordObj(
            response.Id,
            response.Text,
            response.Definitions.map((definition: any) => new Definition(
              definition.Id,
              definition.WordId,
              definition.Text
            ))
          );
          //words.push(word);
        
  
        return word;
      }),
      tap(response => console.log('response is', response))
    );
  }



}
