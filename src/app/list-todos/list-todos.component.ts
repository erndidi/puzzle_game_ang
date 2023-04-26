import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(  
    public id:number, 
    public description: string,    
    public done: boolean,
    public targetDate: Date
  ){  
  }
}




@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  //_message:string;
  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance'

  // }
  todos : Todo[] = [];
  /*  new Todo(1,'learn to dance',false,new Date())    
    ,new Todo(2,'learn to dance',false,new Date())
    ,new Todo(3,'learn to dance',false,new Date())

  ]
  */
  constructor(private service:TodoDataService) { }

  ngOnInit(): void {
    this.service.retrieveAllTodos('in28minutes').subscribe(
       response => {
          console.log(response);
          this.todos = response;
       }
    );
  }

  deleteTodo(id:number)
  {
    console.log(`delete todo id ${id}`);
   /* this.service.deleteTodo.('in28minutes',id).subscribe(
      response=>{
        console.log(response);
        this.me
      }
      
)
  */   
  }

}
