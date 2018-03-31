//创建组件类

//import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'demo01',
  //templateUrl: './demo01.component.html',
  template:`<p>hello world</p>`
})

export class Demo01Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
