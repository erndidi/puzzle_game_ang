import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { IWordObj } from 'src/app/entity';
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
  public getWordAndDefinitions(wrd:string | undefined, sessionid:string | undefined ): Observable<IWordObj> {
    let url = `${environment.apiUrl}getword/${wrd},${sessionid}`;
     console.log('url is ', url);
  
    return this._http.get<any>(url).pipe(
      map(response => {        
         console.log('response is ',response);
          const word:IWordObj = new WordObj(
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
    //  tap(response => console.log('response is', response))
    );
  }



}
