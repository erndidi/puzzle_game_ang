import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { HelloWorldBean, Utility } from './entity';
import { WordComponent } from './word/word.component';
import { LetterComponent } from './letter/letter.component';
import { HintComponent } from './hint/hint.component';
import { WordService } from './service/data/word.service';
import { AuthService } from './service/auth.service';
import { MisplacedComponent } from './misplaced/misplaced.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { WarningComponent } from './warning/warning.component';
import { MainspaceComponent } from './mainspace/mainspace.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material_module';
import { SignupComponent } from './signup/signup.component';
import { TimerComponent } from './timer/timer.component';


//import { ModalComponent } from './modal/modal.component';
//import { ModalService } from './service/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    WordComponent,
    LetterComponent,
    HintComponent,
    MisplacedComponent,
    PlayerInfoComponent,
    WarningComponent,
    MainspaceComponent,
   HeaderComponent,
    HomeComponent,
    SignupComponent,
    TimerComponent
   // ModalComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  exports:[ MaterialModule

  ],
  providers: [{provide: HelloWorldBean, useValue:{message:''}}, WordService,AuthService, Utility],
  bootstrap: [AppComponent]
})
export class AppModule { }
