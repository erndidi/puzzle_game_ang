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
      public text:string, 
      public isRightOne: boolean){}
}
@Inject
export class Word{
  constructor(
    public id: number,
    public text:string,
    public hints: Hint[]
  ){}
  
}

export class Definition {  
  constructor(
    public id: string,
    public wordid: number,
    public text: string
  ) {}
}

@Inject
export class Utility {
  searchForLetterInArray(letter: string, inString: string) {
    let inArray = inString.split(',')
    return inArray.map((element) => element.includes(letter));
  }
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