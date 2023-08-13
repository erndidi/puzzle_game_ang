import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom, throwError } from 'rxjs';
import { IPlayerScore, IUserDTO,PlayerScore } from 'src/app/entity';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _http: HttpClient;
  private _url = "User";

  endpoint = `${environment.apiUrl}add`;

  constructor(private http: HttpClient) { 
    this._http = http;   
  }



    // CreateUser method with correct parameters

async CreateUser(user: IUserDTO) :Promise<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   const url = this.endpoint+"add";
 //console.log('user in createuser is   '+JSON.stringify(user) );
  try {
    return await firstValueFrom(this.http.post(url, user, { headers }));   
  } catch (error) {
    return error;
  }
}

async LoginUser(user: IUserDTO) :Promise<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   const url = this.endpoint+"login"
 //console.log('user in createuser is   '+JSON.stringify(user) );
  try {
    return await firstValueFrom(this.http.post(url, user, { headers }));   
  } catch (error) {
    return error;
  }
}
  
  GetPlayerScores():Observable<IPlayerScore>{
    let url = `${environment.apiUrl}GetTopPlayerScores/`;
    return this._http.get<any>(url).pipe(
      map(response =>{
        const playerScore:IPlayerScore = new PlayerScore(
          response.UserName,
          response.Email,
          response.Score

    )
          return playerScore;
  }));
      
  }

 

 async UpdateScore(user: IUserDTO): Promise<any> {
    const url = environment.apiUrl+"/updateuser/";
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return await this.http.post(url, user, { headers }).pipe(
      catchError((error: any) => {
        // Handle the error here
        console.error('An error occurred:', error);
        // You can perform additional actions like logging, showing an error message, etc.
        // For example, you can show a custom error message to the user:
        // this.toastr.error('An error occurred. Please try again later.', 'Error');
        
        // Rethrow the error to propagate it to the caller
        return throwError(() => new Error('an error occurred while registering the user.'));
      })
    );
  }

  }
