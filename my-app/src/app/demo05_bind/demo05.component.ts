import { Component, OnInit } from '@angular/core';

//装饰器用来接收一个配置对象(元数据) 来表述对应的类，
//eg. 组件类，模块类，指令类
//元数据告诉Angular如何处理当前这个类
@Component({
  selector:'demo05',
  templateUrl:'./demo05.component.html'
})

export class Demo05Component implements OnInit{
  myHref:string = 'http://www.baidu.com';
  testHref:string = 'tmooc.cn';
  uname:string = 'zhangsan'
  //在构造函数中 可进行简单的数据的初始化
  constructor(){

  }
  //组件生命周期中初始化阶段调用的一个钩子函数，一般情况是用来实现
  //稍微复杂的数据的初始化的
  ngOnInit(){

  }
  handelClick(){
     alert('btn is clicked');
  }
}
