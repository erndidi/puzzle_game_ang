import { Inject, Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";

@Inject
export class HelloWorldBean {
  constructor(public message: string) {
    // ... your constructor logic ...
  }
}

export interface IHint {
  wordId: number;
  Definition: any[];
}

export interface IWordObj {
  Id: number;
  Text: string;
  Definitions: IDefinition[];
}

export interface IDefinition {
  Id: string;
  Text: string;
  WordId: number;
}

export interface IUserDTO{
   Email:string,
   UserName:string,
   FirstName:string,
   LastName:string, 
   SessionId:string,
   UsedWord:string,
   PassWord:string,
   Score:number,
   UserFound:boolean
}

export interface IPlayerScore{
  UserName:string,
  Email:string,
  Score:number
}

export class UserDTO implements IUserDTO{
  constructor(
    public Email:string,
    public UserName:string,
    public FirstName:string,
    public LastName:string, 
    public SessionId:string,
    public UsedWord:string,
    public PassWord:string,
    public Score:number,
    public UserFound:boolean
  ){}
  
}

export class PlayerScore implements IPlayerScore{
  constructor(
     public UserName:string,
     public Email:string,
     public Score:number
  ){}
}

export class WordObj implements IWordObj{
  constructor(
    public Id: number,
    public Text:string,
    public Definitions:IDefinition[]
  ){}
}

export class Utility {
 static searchForLetterInArray(letter: string, inString: string) {
    let inArray = inString.split(',')
    return inArray.map((element) => element.includes(letter));
  }



  public rtnClientId(){
    return "479979327892-u4ej1pvcn60a235opbdn93imo6n5kmtq.apps.googleusercontent.com"
  }
  
  public rtnApiUrl(){
    return "https://localhost:7274/"
  }

  public apiKey:string = "AIzaSyA1tN6Ii-mWBs8WovBBbWuCPUevUANwjOo";


}

export class Content{
  constructor(
  public heading:string,
  public description:string
  )
  {}

}


declare var window: Window & typeof globalThis;


export function EndHeading() {
    return "Hey that's it!"
}

export function EndContent(){
  return "Nicely done. If you want to see how you do against other players, consider signing so we can keep track of your scrore. Click the login below!"
}

export function rtnGoogleAuthid(){
  return "987594674066-qk66b1tjs7o2bqcdrsjs542t79g0h6k2.apps.googleusercontent.com";
}

export function rtnGoogleClientid(){
  return "987594674066-qk66b1tjs7o2bqcdrsjs542t79g0h6k2.apps.googleusercontent.com";
}

export function rtnClientId(){
  return "528531459183-udui3pqk4ooq0mm03gc1hss3tom4c1pa.apps.googleusercontent.com"
}

export function rtnApiUrl(){
  return "https://localhost:7274/"
}

export function rtnAppId(){
  return "1901603733551447"
}

export function rtnUserCreateFail(){
  return "User creation failed."
}


export class StoreFunc{

  static getWordFromStore():string | undefined{
    const result = localStorage.getItem("word");
    return result === null ? "" : result;     
  }
  
  static getSessionId(){
    const result = localStorage.getItem("sessionId");
    return result === null ? "" : result;  
  }
  static getScore(){
   return parseInt(localStorage.getItem("score") || "0");
  }

  static setWordInStore(word:string){
    localStorage.setItem('word', word);
  }
  
  static setSessionId(sessionId:string){
      localStorage.setItem('sessionId', sessionId);
  }

  static setUserName(username:string){
    localStorage.setItem("user",username);
  }

  static setScore(score:number){
    localStorage.setItem("score",score.toString());
  }




  
   
}



