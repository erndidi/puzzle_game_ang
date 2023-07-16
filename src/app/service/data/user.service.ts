import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IUserDTO } from 'src/app/entity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _http: HttpClient;
  private _url = "User";
 

  constructor(private http: HttpClient) { 
    this._http = http;   
  }

  CreateUser(user: IUserDTO): Observable<any> {
    const url = environment.apiUrl+"/adduser/";
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, user, { headers }).pipe(
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
  

 

  public UpdateScore(user: IUserDTO): Observable<any> {
    const url = environment.apiUrl+"/updateuser/";
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, user, { headers }).pipe(
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
