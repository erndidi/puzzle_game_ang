import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  private _http: HttpClient;

  constructor(private http: HttpClient) {
    this._http = http;   
  } 

  retrieveAllTodos(username:string) {
   
    console.log('hit bean service');
    return this._http.get<Todo[]>(`http://localhost:8080/users/{username}/todos`)

}

deleteTodo(username:string,id:number){
  return this._http.get(`http://localhost:8080/users/{username}/todos`)
}

}
