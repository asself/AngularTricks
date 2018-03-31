import {Component,OnInit} from '@angular/core';
import {LogService} from './log.service'
@Component({
  selector:'demo11',
  template:`
    <h1>这是和服务相关的demo</h1>
    <button (clcik)="handelClick()">click</button>
  `
})

export class Demo11Component implements OnInit{
   //private 该成员变量只能在当前类中使用
   //public 公开的
   //受保护的 在当前类或者子类
   constructor(private myService:LogService){
      console.log(myService.isDev)
    }
    ngOnInit(){

    }
    handelClick(){
      //this.myService.isDev=true
      this.myService.showMsg('hello service 提供商')
    }
}
