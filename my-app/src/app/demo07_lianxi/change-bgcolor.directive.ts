import { Directive,ElementRef } from '@angular/core';

@Directive({selector:'[changeBgColor]'})

export class ChangeBgColorDirective{
    constructor(myER:ElementRef){
      console.log('指令类被调用了');
      myER.nativeElement.style.backgroundColor = "red";

    }
}
