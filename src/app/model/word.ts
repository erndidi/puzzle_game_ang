import { Inject } from "@angular/core";

export class Hint{
    constructor(
        public id: number,
        public text:string, 
        public isRightOne: boolean){}
  }
  @Inject
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
      public WordId: number,
      public Text: string    
    ) {}
  }