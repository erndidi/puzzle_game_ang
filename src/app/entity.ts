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
