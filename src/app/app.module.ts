import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent, Todo } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { HelloWorldBean } from './entity';
import { WordComponent } from './word/word.component';
import { LetterComponent } from './letter/letter.component';
import { HintComponent } from './hint/hint.component';
import { WordService } from './service/data/word.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    WordComponent,
    LetterComponent,
    HintComponent
    
    
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: HelloWorldBean, useValue:{message:''}}, WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
