import { Directive,ElementRef } from '@angular/core';

@Directive({ selector:'[test]'})

export class TestDirective{
  constructor(myER:ElementRef){
    console.log('指令类被实例化了')
    //得到调用指令的元素
    console.log(myER.nativeElement)
  }
}
