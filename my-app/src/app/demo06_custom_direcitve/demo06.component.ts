import {Component,OnInit} from '@angular/core'

@Component({
  selector:'demo06',
  template:`
      <h1 test>
        这是和自定义指令相关的demo
      </h1>
  `
})

export class Demo06Component implements OnInit{
  constructor(){
      console.log("在构造函数中");
  }
  ngOnInit(){
    console.log("在初始化的生命周期处理函数中")
  }
}
