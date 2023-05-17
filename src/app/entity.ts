import { Inject, Injectable, inject } from "@angular/core";

@Inject
export class HelloWorldBean {
  constructor(public message: string) {
    // ... your constructor logic ...
  }
}
@Inject
export class Hint{
  constructor(
      public id: number,
      public Text:string
  ){}
}

export class WordObj{
  constructor(
    public Id: number,
    public Text:string,
    public Definitions: Definition[]
  ){}
  
}

export class Definition {  
  constructor(
    public Id: string,
    public Text: string,
    public WordId: number
  ) {}
}


export class Utility {
 public searchForLetterInArray(letter: string, inString: string) {
    let inArray = inString.split(',')
    return inArray.map((element) => element.includes(letter));
  }
  constructor(){}

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

export class User {
  public name!: string;
  public email!: string;
  public password!: string;
  public hobbies!: string;
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


