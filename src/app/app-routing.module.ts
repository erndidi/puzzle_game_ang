import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http'
//import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { Word, WordComponent } from './word/word.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'home', component:WordComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
 {path:'logout', component:WordComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule,HttpClientModule]
})
export class AppRoutingModule { }
