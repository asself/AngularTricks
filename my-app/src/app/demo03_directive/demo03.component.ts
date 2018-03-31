import { Component } from '@angular/core'


@Component({
  selector: 'demo03',
  templateUrl:'./demo03.component.html'
})

export class Demo03Component{
  uname:string = 'zhangsan';
  list:Array<any> = [100,200,300];
  isMemeber:boolean = false;
  answer: 'f';
}
